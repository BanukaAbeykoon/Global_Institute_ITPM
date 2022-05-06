const express = require('express');
const course = require('../../models/Courses/course');

const router = express.Router();

//save course

router.post('/course/save',(req,res)=>{
    
    let newcourse = new course(req.body);

    newcourse.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"course saved successfully"
        });
    });
});

//get course

router.get('/course',(req,res) =>{
    course.find().exec((err,course) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingcourse:course
        });
    });
});

//get a specific course
router.get("/course/:id",(req,res) =>{

    let courseId = req.params.id;

    course.findById(courseId, (err, course) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        course
      });
    });

});


//update course

router.put('/course/update/:id',(req,res)=>{
    course.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,course)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete course

    router.delete("/course/delete/:id",(req,res) =>{
        course.findByIdAndRemove(req.params.id).exec((err,deletedcourse) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesfull",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedcourse
            });
    });
});

module.exports = router;