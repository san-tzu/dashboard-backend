const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  start: {
    type: String,
    required: [true, "Start location is required"],
  },
  destination: {
    type: String,
    required: [true, "Destination is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  meter: {
    type: Number,
    default: 0,
  },
  other: {
    type: Number,
    default: 0.0,
  },
  remark: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "User Name is required"],
  }
});

const Travel = mongoose.model('Travel', travelSchema)

module.exports = Travel;