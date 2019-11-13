const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username:String,
    phrase:String
})

module.exports = {
    User: mongoose.model('User', User)
}