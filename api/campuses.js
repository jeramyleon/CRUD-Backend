const express = require("express");
const router = express.Router();
const { Campus } = require("../models");
//Gets every single campus
router.get("/", async (req, res) => {
  try {
    const campus = await Campus.findAll();
    res.json(campus);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch campuses" });
  }
});
router.post("/", async (req, res) => {
  try {
    const campus = await Campus.create(req.body);
    res.status(201).json(campus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
//gets one campus specifically by ID
router.get("/:id", async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (campus) {
      res.json(campus);
    } else {
      res.status(404).json({ error: "Campus not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch the specified campus data" });
  }
});
//deletes campuses by specified id
router.delete("/:id", async (req, res) => {
  try {
    const erased = await Campus.destroy({
      where: { id: req.params.id },
    });
    if (erased) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Campus not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete campus" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updated = await Campus.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCamp = await Campus.findByPk(req.params.id);
      res.json({
        message: `Campus ${updatedCamp.name} has been updated.`,
        campus: updatedCamp
      });
    } else {
      res.status(404).json({ error: "Campus not found! Failed to update.." });
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
