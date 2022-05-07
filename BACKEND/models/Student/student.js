const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    studentName:{
           type:String,
           required:true
       },

       studentID:{
        type:String,
        required:true
       },
       
       courseName:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
    }

       });
       module.exports = mongoose.model('student',studentSchema);







