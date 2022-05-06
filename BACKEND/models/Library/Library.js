//const { truncateSync } = require('fs');
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  bookid: {
    type: String,
    required: true,
  },
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  relatedmodule: {
    type: String,
    required: true,
  },
  bookstatus: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Library", postSchema);
