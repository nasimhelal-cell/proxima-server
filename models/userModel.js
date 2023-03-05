const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//user defined method making which can be used as User.login()
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled ");
  }
  //check if the email is invalid
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email ");
  }
  //password format -> lowercase + uppercase + number + symbol + 8+ chars
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Invalid password. Your password must include a combination of uppercase and lowercase letters, numbers, and special characters. Please try again."
    );
  }
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email already used");
  }

  //password encrypt or hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create an user

  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model("User", userSchema);
