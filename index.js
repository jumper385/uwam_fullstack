const mongoose = require('mongoose')
const app = require('express')()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URI || `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(
    `${MONGO_URL}/uwam_articles`, 
    {useUnifiedTopology:true, useNewUrlParser:true},
    () => console.log(`joined mongo db ${MONGO_URL}`)
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/')

app.listen(PORT, () => console.log(`listening to port ${PORT}`))