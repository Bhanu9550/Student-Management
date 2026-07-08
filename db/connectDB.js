const mongoose = require('mongoose')

// connecting mongodb database using mongoose
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/StudentsDB")
        console.log("database connected successfully..");
    }
    catch(error){
        console.log(error.message);
    }
}



module.exports = connectDB