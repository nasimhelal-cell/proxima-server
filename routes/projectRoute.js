const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const Project = require("../models/projectModel");

const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);
//routes

//get all projects
router.get("/", getAllProjects);

//get a single project
router.get("/:id", getSingleProject);

//post a new project
router.post("/", postProject);

//delete a  project
router.delete("/:id", deleteProject);

//update a  project
router.patch("/:id", updateProject);

module.exports = router;
