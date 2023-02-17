const express = require("express");
const router = express.Router();

//routes

//get all projects
router.get("/", (req, res) => {
  res.json({ message: "get all projects" });
});

//get a single project
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single project" });
});

//post a new project
router.post("/", (req, res) => {
  res.json({ message: "Post a new project" });
});

//delete a  project
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a project" });
});

//update a  project
router.patch("/:id", (req, res) => {
  res.json({ message: "update a project" });
});

module.exports = router;
