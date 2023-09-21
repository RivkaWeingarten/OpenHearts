const router = require("express").Router();
const db = require("../models");
require("dotenv").config();
// const families = require("../models/family_model.js");
//fetchtotal amount
router.get("/fetchtotaldonationamount", async (req, res) => {
  try {
    const result = await db.Donation.aggregate([
      {
        $group: {
          _id: null,
          totalDonationAmount: { $sum: "$donationAmount" },
        },
      },
    ]).exec();

    if (result.length > 0) {
      const totalDonationAmount = result[0].totalDonationAmount;
      res.json({ totalDonationAmount });
    } else {
      res.json({ totalDonationAmount: 0 });
    }
  } catch (error) {
    console.error("Error calculating total donation amount:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// show all families
router.get("/", async (req, res) => {
  const families = await db.Family.find()
    .sort({ name: 1 })
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

//donate to all families equally
router.post("/donate", async (req, res) => {
  try {
    const { donor, donationAmount } = req.body;

    const families = await db.Family.find();

    if (families.length > 0) {
      const totalFamilies = families.length;
      const amountPerFamily = donationAmount / totalFamilies;

      const donations = [];

      for (const family of families) {
        const donation = await db.Donation.create({
          donor,
          donationAmount: amountPerFamily,
        });

        family.donations.push(donation.id);
        family.balance += amountPerFamily;
        await family.save();

        donations.push(donation);
      }

      res.json({ message: "Donation distributed successfully.", donations });
    } else {
      res.json({ message: "No families found to distribute donation." });
    }
  } catch (error) {
    console.error("Error distributing donation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Edit Family Route
router.put("/:id", (req, res) => {
  console.log(req.body);
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
    .then(() => {
      res.json(" deleted");
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
