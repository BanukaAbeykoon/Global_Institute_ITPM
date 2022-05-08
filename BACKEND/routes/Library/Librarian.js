const express = require("express");
const e = require("express");
let Librarian = require("../../models/Library/Librarian");


const router = express.Router();

router.post("/Librarianlogin", async (req, res) => {
  try {
    const { email, Passward } = req.body;
    if (!email || !Passward) {
      return res.status(400).json({ error: "Please fill  all data" });
    }
    //check with database courseName
    const Librarianlogin = await Librarian.findOne({ email: email });
    //console.log(studentLogin);
    if (!Librarianlogin) {
      res.status(400).json({ error: "Book does not exists" });
    } else if (Passward == Librarianlogin.Passward) {
      res.json({ message: "Librarian Login Successfull" });
      console.log(res.status.error);
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

//save posts

router.post("/Librarianss", (req, res) => {
  let newLibrarylogin = new Librarian(req.body);

  newLibrarylogin.save((err) => {
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
module.exports = router;