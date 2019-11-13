const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client/build'))

if (process.env.NODE_ENV === 'production'){
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.route('/api/users')
    .get(async (req,res) => {
        const UserCollection = await Schemas.User.find({}).exec()
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

app.listen(PORT, () => console.log(`listening to port ${PORT}`))