const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
  Name: { type: String }
});

module.exports = status = mongoose.model("status", statusSchema);
