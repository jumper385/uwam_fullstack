const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Schemas = require('./Schemas/Schemas')

const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URI || `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(
    `${MONGO_URL}/uwam_articles`, 
    {useUnifiedTopology:true, useNewUrlParser:true},
    () => console.log(`joined mongo db ${MONGO_URL}`)
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client/build'))

app.get('/', async (req,res) => {
    const UserCollection = await Schemas.User.find({}).exec()
    res.json(UserCollection)
})

app.post('/', async (req,res) => {
    const { username, phrase } = req.body
    const newData = new Schemas.User({username: username, phrase:phrase})
    const dbFile = await newData.save().exec()
    res.json(dbFile)
    console.log(dbFile)
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))