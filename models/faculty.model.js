const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    image: {
        type: String,
    },
    role:{
        type: String
    },
    name: {
        type: String,
        unique: true,
    },
    major: {
        type: String,

    },
    description: {
        type: String,
        required: true,
    }
});

const facultyModel = mongoose.model("faculty", facultySchema)
module.exports = facultyModel;