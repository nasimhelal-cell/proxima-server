require("dotenv").config();
const express = require("express");
//make express app
const app = express();
//listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening for port" + PORT);
});
