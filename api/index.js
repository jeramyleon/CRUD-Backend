const express = require("express");
const router = express.Router();
const ducksRouter = require("./ducks");
const campusesRouter = require("./campuses");

router.use("/ducks", ducksRouter);
router.use("/campuses", campusesRouter);


module.exports = router;
