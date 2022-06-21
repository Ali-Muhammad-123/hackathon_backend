var express = require("express");
var router = express.Router();
const db = require("../models");
/* GET home page. */
router.get("/students", async function (req, res) {
	const allStudents = await db.Student.find();
	res.send(allStudents);
});

router.get("/marks", async function (req, res) {
	const allMarks = await db.Mark.find();
	res.send(allMarks);
});

router.get("/heads", async function (req, res) {
	const allHeads = await db.Head.find();
	res.send(allHeads);
});

router.get("/grades", async function (req, res) {
	const allGrades = await db.Grade.find();
	res.send(allGrades);
});

router.get("/courses", async function (req, res) {
	const allCourses = await db.Course.find();
	res.send(allCourses);
});

router.get("/registrations", async function (req, res) {
	const allRegistrations = await db.Registration.find();
	res.send(allRegistrations);
});

router.post("/updateRecord", async function (req, res) {
	const updatedRecord = await db.Mark.findOneAndUpdate(
		{ mid: req.body.IdChange },
		{ marks: req.body.markChange }
	);
	console.log(req.body.markChange);
	res.send(updatedRecord);
});

module.exports = router;
