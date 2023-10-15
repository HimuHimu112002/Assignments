const mongoose = require('mongoose')
const {Schema} = mongoose

const DataTodoModel = new Schema({
    email:{
        type: String
    },
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    Mobile:{
        type: String,
    },
    Password:{
        type: String,

    },
    Address:{
        type: String,
    },
    Roll:{
        type: String,
    },
    Class:{
        type: String,
    }
    
}, {versionKey: false})
module.exports = mongoose.model("StudentDataModel", DataTodoModel)