const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

       courseName:{
           type:String,
           required:true
       },

       studentID:{
        type:String,
        required:true
       },
       
       userName:{
        type:String,
        required:true
       },

       password:{
        type:String,
        required:true
       },

       branch:{
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
    },

    paymentSlip:{
        type:String,
        required:true
       }

       });
       module.exports = mongoose.model('Payments',paymentSchema);







