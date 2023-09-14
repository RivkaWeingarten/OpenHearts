const db = require("../models");
// const mongoose = require("mongoose");

const families = [
  
    {
      name: "Jane Seed",
      pic: "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      alias: "Jane Doe",
      address1: "111 Love Place",
      address2: "",
      city: "Anytown",
      state: "MD",
      zip: "55555",
      phone: "111-222-3333",
      email: "1234@1234.com",
      moreInfo: "Dire needs, Homeless",
      monthlyBudget: 2400,
      food: 500,
      rent: 1500,
      utilityBills: 200,
      other: 200,
    },
    {
      name: "Jane Seed1",
      pic: "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      alias: "Jane Doe1",
      address1: "112 Love Street",
      address2: "",
      city: "Anytown",
      state: "MD",
      zip: "55555",
      phone: "111-222-3334",
      email: "12345@12345.com",
      moreInfo: "Homeless, learning disabled children",
      monthlyBudget: 3500,
      food: 700,
      rent: 2000,
      utilityBills: 300,
      other: 500,
    },
    {
      name: "Jane Seed2",
      pic: "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      alias: "Jane Doe2",
      address1: "113 Love Street",
      address2: "",
      city: "Anytown",
      state: "MD",
      zip: "55555",
      phone: "111-222-3335",
      email: "12346@12346.com",
      moreInfo: "Parent with terrible depression, Kids have no clothing",
      monthlyBudget: 4100,
      food: 500,
      rent: 2500,
      utilityBills: 100,
      other: 1000,
  },
];

// name: { type: String, required: true },
// pic: {
//   type: String,
//   default:
//     "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
// },
// alias: { type: String, required: true },
// address: { type: String, required: true },
// address2: { type: String, required: true },

// city: { type: String, default: "Anytown" },
// state: { type: String, default: "USA" },
// zip: { type: String, default: "00000" },
// email: { type: String, default: "123@123.com" },
// moreInfo: { type: String, default: "" },
// monthlyBudget: { type: Number, default: 0 },
// food: { type: Number, default: 0 },
// rent: { type: Number, default: 0 },
// utilityBills: { type: Number, default: 0 },
// other: { type: Number, default: 0 },
// donations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation" }],
// });

db.Family.create(families)
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
