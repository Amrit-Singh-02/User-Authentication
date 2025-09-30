require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://user-authentication-1-tmx3.onrender.com/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
