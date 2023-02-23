const User = require("../models/userModel");

// user login controller
const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

// user login controller
const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
