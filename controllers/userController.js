const User = require("../models/userModel");

// user login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.login(email, password);

  res.json({ message: "login" });
};

// user singup controller
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  // res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
