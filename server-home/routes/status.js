const express = require("express");
const router = express.Router();

//models
const Status = require("../models/Status");

router.get("/", (req, res) => {
  Status.find()
    .then(statusData => res.json(statusData))
    .catch(err => res.status(404).json({ noStatusfound: "No Status found" }));
});

router.post("/", (req, res) => {
  const newStatus = new Status({
    Name: req.body.Name
  });

  newStatus.save().then(newStatusData => res.json(newStatusData));
});

module.exports = router;
