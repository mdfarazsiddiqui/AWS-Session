const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// importing the dotenv module to use environment variables:
require("dotenv").config();

const api_key = process.env.SECRET_KEY;

const stripe = require("stripe")(api_key);

// ------------ Imports & necessary things here ------------

// Setting up the static folder:
// app.use(express.static(resolve(__dirname, "./client")));
app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

const domainURL = process.env.DOMAIN;

// Server listening:
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log(`You may access you app at: ${domainURL}`);
});
