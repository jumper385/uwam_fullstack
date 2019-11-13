const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username:String,
    phrase:String
})

const Article = new mongoose.Schema({
    title:String,
    article:String
})

module.exports = {
    User: mongoose.model('User', User),
    Article: mongoose.model('Article', Article)
}