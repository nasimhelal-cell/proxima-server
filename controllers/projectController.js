const Project = require("../models/projectModel");
const mongoose = require("mongoose");

// get all projects---------------------------------------------------------------------------------
const getAllProjects = async (req, res) => {
  const projectsArray = await Project.find({}).sort({ createdAt: -1 });
  res.status(200).json(projectsArray);
};

//get a single project------------------------------------------------------------------------------
const getSingleProject = async (req, res) => {
  const { id } = req.params;

  //match this id with mongoose provided id / if not matched then return error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Id" });
  }
  //if matched then make a project
  const project = await Project.findById(id);
  //but if project is not found then again return an error
  if (!project) {
    return res.status(404).json({ error: "No Project Found" });
  }
  // if id is valid and matched and also project is found then get the desirable project as a single project
  res.status(200).json(project);
};

//post a new single project-------------------------------------------------------------------------
const postProject = async (req, res) => {
  const { title, tech, budget, duration, manager, dev } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push("title");

  if (!tech) emptyFields.push("tech");

  if (!budget) emptyFields.push("budget");

  if (!duration) emptyFields.push("duration");

  if (!manager) emptyFields.push("manager");

  if (!dev) emptyFields.push("dev");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields: emptyFields });
  }

  try {
    //this project is refered as the data which is post to DB
    const project = await Project.create({ ...req.body });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a single project---------------------------------------------------------------------------
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "No project found" });
  }

  res.status(200).json(project);
};

//updated a project---------------------------------------------------------------------------------
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, tech, budget, duration, manager, dev } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push("title");

  if (!tech) emptyFields.push("tech");

  if (!budget) emptyFields.push("budget");

  if (!duration) emptyFields.push("duration");

  if (!manager) emptyFields.push("manager");

  if (!dev) emptyFields.push("dev");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields: emptyFields });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const project = await Project.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!project) {
    return res.status(400).json({ error: "No project found" });
  }

  res.status(200).json(project);
};
// export ------------------------------------------------------------------------------------------
module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
