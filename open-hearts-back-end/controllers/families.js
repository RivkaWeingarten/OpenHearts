const router = require("express").Router();
const db = require("../models");
require("dotenv").config();
// const families = require("../models/family_model.js");

// show all families
router.get("/", async (req, res) => {
  const families = await db.Family.find()
    .populate("donations")
    .then((families) => {
      res.json(families);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    });
});
// 'ADD family ROUTE'
router.post("/", (req, res) => {
  console.log(req.body);
  db.Family.create(req.body)
    .then((createdFamily) => {
      res.json(createdFamily);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

//display a single family

router.get("/:id", (req, res) => {
  db.Family.findById(req.params.id)
    .populate("donations")
    .then((family) => {
      console.log(family.donations);
      res.json(family);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});
//Edit Family Route
router.put("/:id", (req, res) => {
  db.Family.findByIdAndUpdate(req.params.id, req.body)
    .then((family) => {
      res.json(family);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// delete family

router.delete("/:id", (req, res) => {
  db.Family.findByIdAndDelete(req.params.id)
    .then((family) => {
      res.json(family.name + " deleted");
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// add donation

router.post("/:id/donation", (req, res) => {
  db.Family.findById(req.params.id).then((family) => {
    db.Donation.create(req.body)
      .then((donation) => {
        family.donations.push(donation.id);
        family.save().then(() => {
          res.json(donation);
        });
      })
      .catch((err) => {
        console.log("err", err);
        res.status(500).json({ error: "An error occurred" });
      })
      .catch((err) => {
        console.log("err", err);
        res.status(500).json({ error: "An error occurred" });
      });
  });
});

//delete donation

router.delete("/:id/donation/:donationId", (req, res) => {
  db.Donation.findByIdAndDelete(req.params.donationId)
    .then((donation) => {
      res.json(donation.donor + donation.donationAmount + " deleted");
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

module.exports = router;
