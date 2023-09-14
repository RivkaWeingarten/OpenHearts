const mongoose = require("mongoose");
require("dotenv").config();

let donationSchema = new mongoose.Schema({
  donor: { type: String, default: "Anonymous" },
  donationAmount: { type: Number, default: 0 },
  rentAmount: { type: Number, default: 0 },
  foodAmount: { type: Number, default: 0 },
  utilityBillsAmount: { type: Number, default: 0 },
  otherAmount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Donation", donationSchema);
