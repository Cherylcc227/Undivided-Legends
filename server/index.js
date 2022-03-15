const express = require("express");
const axios = require("axios");
const app = express ();
const path = require("path");
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));



app.listen(port, ()=> {
  console.log(`The app server is running on port: ${port}`);
});