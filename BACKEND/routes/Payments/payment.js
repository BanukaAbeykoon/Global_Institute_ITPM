const express = require('express');
const payment = require('../../models/Payments/payment');

const router = express.Router();

//save payment

router.post('/payment/save',(req,res)=>{
    
    let newpayment = new payment(req.body);

    newpayment.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"payment saved successfully"
        });
    });
});

//get payment

router.get('/payment',(req,res) =>{
    payment.find().exec((err,payment) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingpayment:payment
        });
    });
});

//get a specific payment
router.get("/payment/:id",(req,res) =>{

    let paymentId = req.params.id;

    payment.findById(paymentId, (err, payment) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        payment
      });
    });

});


//update payment

router.put('/payment/update/:id',(req,res)=>{
    payment.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,payment)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete payment

    router.delete("/payment/delete/:id",(req,res) =>{
        payment.findByIdAndRemove(req.params.id).exec((err,deletedpayment) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesfull",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedpayment
            });
    });
});

module.exports = router;