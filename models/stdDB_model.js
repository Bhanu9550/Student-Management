const mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    isPresent:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const Students = mongoose.model("Student", StudentSchema)

module.exports = Students



