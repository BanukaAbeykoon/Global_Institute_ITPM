const express = require("express");
const LBReserve = require("../../models/Library/LBReserve");

const router = express.Router();
//save posts

router.post("/LBReserve/save", (req, res) => {
  let newLBReserve = new LBReserve(req.body);

  newLBReserve.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Posts saved successfully",
    });
  });
});

//get posts
router.get("/LBReserve", (req, res) => {
  LBReserve.find().exec((err, LBReserve) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      LBReservePosts: LBReserve,
    });
  });
});

//get a specific post
router.get("/LBReserve/:id", (req, res) => {
  let LBReserveId = req.params.id;

  LBReserve.findById(LBReserveId, (err, LBReserve) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      LBReserve,
    });
  });
});

//update posts
router.put("/LBReserve/update/:id", (req, res) => {
  LBReserve.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, LBReserve) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update unccessfully",
      });
    }
  ); 
});

//delete post
router.delete("/LBReserve/delete/:id", (req, res) => {
  LBReserve.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete Succesful",
      deletedPost,
    });
  });
});

module.exports = router;
