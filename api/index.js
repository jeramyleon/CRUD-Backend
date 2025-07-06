const express = require("express");
const router = express.Router();
const ducksRouter = require("./ducks");
const campusesRouter = require("./campuses");
const studentsRouter = require("./students");


router.use("/ducks", ducksRouter);
router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);


module.exports = router;
