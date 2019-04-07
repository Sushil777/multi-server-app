const express = require("express");
const router = express.Router();

//models
const Task = require("../models/Task");

router.get("/", (req, res) => {
  Task.find()
    .then(tasksData => res.json(tasksData))
    .catch(err => res.status(404).json({ noTasksfound: "No Tasks found" }));
});

router.post("/", (req, res) => {
  const newTask = new Task({
    Name: req.body.Name,
    Description: req.body.Description
  });

  newTask.save().then(newTaskData => res.json(newTaskData));
});

router.get("/:name", (req, res) => {
  Task.find({Name: req.params.name})
    .then(taskData => res.json(taskData))
    .catch(err =>
      res.status(404).json({ noTaskfound: "No Task found with that name" })
    );
});

module.exports = router;
