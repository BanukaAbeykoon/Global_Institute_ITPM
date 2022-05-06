const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

       courseName:{
           type:String,
           required:true
       },

       courseID:{
        type:String,
        required:true
       },
       
       subject:{
        type:String,
        required:true
       },
       date:{
        type:String,
        required:true
       },
       fee:{
        type:String,
        required:true
    }

       });
       module.exports = mongoose.model('Courses',courseSchema);







