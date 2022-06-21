const mongoose = require("mongoose");

const markSchema = mongoose.Schema({
	mid: Number,
	regno: String,
	hid: Number,
	marks: Number,
});

module.exports = mongoose.model("Mark", markSchema);
