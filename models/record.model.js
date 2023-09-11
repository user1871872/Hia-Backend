const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    image:{
        type: String,
    },
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    age:{
        type: String,
    },
    birthdate:{
        type: String,
    },
    address:{
        type: String,
    },
    mother:{
        type: String,
    },
    occupation:{
        type: String,
    },
    father:{
        type: String,
    },
    guardian:{
        type: String,
    },
    emergencyNumber:{
        type: String,
    }

});

const recordModel = new mongoose.model('records', recordSchema)
module.exports = recordModel;