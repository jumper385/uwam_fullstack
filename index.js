const mongoose = require('mongoose')
const express = require('express')
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

app.get('/api/users', async (req,res) => {
    const UserCollection = await Schemas.User.find({}).exec()
    res.json(UserCollection)
})

app.post('/api/users', async (req,res) => {
    const { username, phrase } = req.body
    let newUser = await Schemas.User.create({username: username, phrase:phrase})
    res.json(newUser)
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))