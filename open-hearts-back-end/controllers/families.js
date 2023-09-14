const router = require("express").Router();
const db = require("../models");
require("dotenv").config();
// const families = require("../models/family_model.js");

// router.get("/", (req, res) => {
//     db.Family.find()
//       .populate("donations")
//       .then((families) => {
//         res.render("families/index", { families });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.render("error404");
//       });
//   });

router.get("/", async (req, res) => {
  const families = await db.Family.find();
  res.json(families);
});

router.post("/", (req, res) => {
  db.Family.create(req.body)
    .then((createdFamily) => {
      res.json(createdFamily);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// router.post("/", (req, res) => {
//   db.Family.create(req.body)
//     .then((createdFamily) => {
//       res.json(createdFamily);
//     })
//     .catch((err) => {
//       console.error("Error:", err);
//       res.status(500).json({ error: "An error occurred" });
//     });
// });

module.exports = router;
