const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port = 8000;

mongoose.connect("", { useNewUrlParser: true,useUnifiedTopology: false,})
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

