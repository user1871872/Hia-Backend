const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    Idnumber: String,
    name: String,
    username: String,
    password: String,
    image: String
    
})

const registerModel = mongoose.model('accounts', registerSchema)
module.exports = registerModel;