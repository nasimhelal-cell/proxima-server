require("dotenv").config();
const projectsRoute = require("./routes/projectRoute");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
//port
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json()); // for this a new post from frontend is receiving data by body parser
app.use((req, res, next) => {
  next();
});

//routes are connected with our app by this
app.use("/api/projects", projectsRoute);
app.use("/api/user", userRoutes); //making end point for user login and signup

//mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 60000 })
  .then(() => {
    //listening request
    app.listen(port, () => {
      console.log(`connected to mongoDB and Listining from ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
