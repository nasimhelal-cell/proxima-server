const mongoose = require("mongoose"); //import mongoose

const Schema = mongoose.Schema; //import mongoose Schema

// Single project model
const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    dev: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    //aditional attribute of project
    timestamps: true,
  }
);
module.exports = mongoose.model("Project", projectSchema); //main model of my project as  Project
