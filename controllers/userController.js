const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

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

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  // res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
