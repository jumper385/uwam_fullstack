const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const Schemas = require('./Schemas/Schemas')

const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URI || `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(
    `${MONGO_URL}`, 
    {useUnifiedTopology:true, useNewUrlParser:true},
    () => console.log(`joined mongo db ${MONGO_URL}`)
)

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

// if (process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req,res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }

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
        let newArticle = await Schemas.Article.create({title:title, article:article})
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

app.listen(PORT, () => console.log(`listening to port ${PORT}`))