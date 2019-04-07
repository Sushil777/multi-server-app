const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  Name: { type: String },
  Description: { type: String }
});

module.exports = task = mongoose.model("tasks", taskSchema);
