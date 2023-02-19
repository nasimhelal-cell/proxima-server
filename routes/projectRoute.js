const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");
const Project = require("../models/projectModel");
const router = express.Router();

//routes

//get all projects
router.get("/", getAllProjects);

//get a single project
router.get("/:id", getSingleProject);

//post a new project
router.post("/", postProject);

//delete a  project
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a project" });
});

//update a  project
router.patch("/:id", (req, res) => {
  res.json({ message: "update a project" });
});

module.exports = router;
