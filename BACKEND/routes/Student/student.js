const express = require('express');
const student = require('../../models/Student/student');


const router = express.Router();

//save student

router.post('/student/save',(req,res)=>{
    
    let newstudent = new student(req.body);

    newstudent.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"student saved successfully"
        });
    });
});

//get student

router.get('/student',(req,res) =>{
    student.find().exec((err,student) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingstudent:student
        });
    });
});

//get a specific student
router.get("/student/:id",(req,res) =>{

    let studentId = req.params.id;

    student.findById(studentId, (err, student) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        student
      });
    });

});


//update student

router.put('/student/update/:id',(req,res)=>{
    student.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,student)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete student

    router.delete("/student/delete/:id",(req,res) =>{
        student.findByIdAndRemove(req.params.id).exec((err,deletedstudent) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesfull",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedstudent
            });
    });
});

module.exports = router;