const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    qulification:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('staff',staffSchema);