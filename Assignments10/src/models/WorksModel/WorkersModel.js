const mongoose = require('mongoose')
const {Schema} = mongoose

const DataTodoModel = new Schema({
    title:{
        type: String
    },
    classNote:{
        type: String
    },
    description:{
        type: String,
    },
    status:{
        type: String,

    },
    email:{
        type: String,
    },
    
    
}, {versionKey: false})
module.exports = mongoose.model("WorksDataModel", DataTodoModel)