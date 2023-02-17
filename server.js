require("dotenv").config();
const projectsRoute = require("./routes/projectRoute");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//port
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  next();
});

//routes are connected with our app by this
app.use("/api/projects", projectsRoute);

//mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening request
    app.listen(port, () => {
      console.log(`connected to mongoDB and Listining from ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
