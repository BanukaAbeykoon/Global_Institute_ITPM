const express = require("express");
const Library = require("../../models/Library/Library");

const router = express.Router();
//save posts

router.post('/Library/save', (req, res) => {
  let newLibrary = new Library(req.body);

  newLibrary.save((err) => {
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
router.get('/Library', (req, res) => {
  Library.find().exec((err, Library) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: Library,
    });
  });
});


//get a specific post
router.get('/Library/:id', (req, res) => {
  let LibraryId = req.params.id;

  Library.findById(LibraryId, (err, Library) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      Library,
    });
  });
});

//update posts
router.put('/Library/update/:id', (req, res) => {
  Library.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, Library) => {
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
router.delete('/Library/delete/:id', (req, res) => {
  Library.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
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