const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({});

module.exports = mongoose.model("comment", commentModel);
