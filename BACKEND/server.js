const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");//convert jason to javascript
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT||8000;

//app middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL)
.then(()=>{
   console.log("MongoDB Connected Successfully!!"); 
}).catch((err)=>{
    console.log("MongoDB Connection Error",err.message);
})

//import course route
const courseRouter=require("./routes/Courses/course");

//import staff route
const staffRouter=require("./routes/Staff/staff");

//import route Library


//import routes students







//app.use course router
app.use(courseRouter);
//app.use staff router
app.use(staffRouter);

//route middleware Library


//route midddleware Student


app.listen(PORT,() => {//function(){}
    console.log(`Server is up and running on port number :${PORT}`);
    });



