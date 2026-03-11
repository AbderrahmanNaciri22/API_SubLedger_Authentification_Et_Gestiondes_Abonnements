require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/users.routes");
const loginRoutes = require("./routes/login.routes");
const subscriptioninRoutes = require("./routes/subscription.routes");

app.use("/login",loginRoutes);
app.use("/subscription",subscriptioninRoutes);
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Atlas connected")).catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});