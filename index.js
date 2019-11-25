const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const multer = require('multer')
const shortid = require('shortid')

const Schemas = require('./Schemas/Schemas')

const PORT = process.env.PORT || 8080
const MONGO_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/uwam_articles?retryWrites=true&w=majority`
const MONGO_FILE_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/uwam_files?retryWrites=true&w=majority`

mongoose.connect(`${MONGO_URL}`, {useUnifiedTopology:true, useNewUrlParser:true})

const imgconn = mongoose.createConnection(
    `${MONGO_FILE_URL}`,
    {useUnifiedTopology:true, useNewUrlParser:true}
)

let gfs = null
imgconn.once('open', () => {
    gfs = Grid(imgconn.db, mongoose.mongo)
    gfs.collection('fs')
})

// const imgConn = mongoose.connect(imgURL, {useUnifiedTopology:true, useNewUrlParser:true})

const storage = new GridFsStorage({ 
    url: MONGO_FILE_URL,
    file: (req,file) => ({filename:shortid.generate()})
})
const upload = multer({ storage })

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, 'client/build')))
app.get('/client*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.route('/api/users')
    .get(async (req,res) => {
        const UserCollection = await Schemas.User.find({}).exec()
        console.log(UserCollection)
        res.json(UserCollection)
    })

    .post( async (req,res) => {
        const { username, phrase } = req.body
        let newUser = await Schemas.User.create({username: username, phrase:phrase})
        res.json(newUser)
    })

app.route('/api/articles')
    .get(async(req,res) => {
        const ArticleCollection = await Schemas.Article.find({}).exec()
        res.json(ArticleCollection)
    })

    .post(async(req,res) => {
        const {title, article} = req.body
        let newArticle = await Schemas.Article.create({title:title, article:article, category:category})
        res.json(newArticle)
    })

    .delete(async(req,res) => {
        console.log(req.body)
        let deleteArticle = await Schemas.Article.findByIdAndDelete(req.body.id)
        res.json(deleteArticle)
    })

app.route('/api/articles/:id')
    .get(async(req,res) => {
        console.log(req.params.id)
        const Article = await Schemas.Article.findOne({_id:req.params.id})
        res.json(Article)
    })

app.post('/api/images', upload.single('photo'), async(req,res,next) => {
    res.json({filename: req.file.filename})
})

app.get('/api/images', async(req,res) => {
    const imageList = await gfs.files.find().toArray()
    res.json(imageList)
})

app.get('/api/images/:id', (req,res) => {
    gfs.files.findOne({filename:req.params.id}, (err,file) => {
        if(err) throw err
        const readstream = gfs.createReadStream(file.filename)
        readstream.pipe(res)
    })
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))