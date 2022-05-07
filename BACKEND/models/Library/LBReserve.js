//const { truncateSync } = require('fs');
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
 
  Book_ID: {
    type: String,
    required: true,
  },
  Book_Name: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  pno: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("LBReserve", postSchema);
