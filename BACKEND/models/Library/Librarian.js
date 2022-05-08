const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  Passward: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Librarian", postSchema);
