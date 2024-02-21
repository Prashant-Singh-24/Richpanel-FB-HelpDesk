const express = require("express");
require("dotenv").config();
const app = express();
const port = 5005;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./Routes");

mongoose
  .connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database Connection Established"))
  .catch((err) => console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:5005`);
});
