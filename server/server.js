const express = require("express");
const connectDB = require("./connection/connection");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

connectDB();

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
