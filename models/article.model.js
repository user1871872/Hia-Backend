const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    description:{
        type: String,
        required: true,
    }
});

const articleModel = mongoose.model("articles", articleSchema)
module.exports = articleModel;