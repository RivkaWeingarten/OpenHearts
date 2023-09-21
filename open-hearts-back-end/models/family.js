const mongoose = require("mongoose");
require("dotenv").config();
let familySchema = new mongoose.Schema({
  name: { type: String, required: false },
  pic: {
    type: String,
    default:
      "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  alias: { type: String, required: false },
  address1: { type: String, required: false },
  address2: { type: String, required: false },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  zip: { type: String, default: "00000" },
  phone: { type: String, default: "212-333-4444" },
  email: { type: String, default: "123@123.com" },
  moreInfo: { type: String, default: "" },
  monthlyBudget: { type: Number, default: 0 },
  food: { type: Number, default: 0 },
  rent: { type: Number, default: 0 },
  utilityBills: { type: Number, default: 0 },
  other: { type: Number, default: 0 },
  donations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation" }],
});


module.exports = mongoose.model("Family", familySchema);
