const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./server/router/router");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
