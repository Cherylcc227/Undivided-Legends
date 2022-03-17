const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const {getCharacters} = require ("../helpers/marvel")
const {getCharacterByName} = require ("../helpers/superhero");
const {find} = require("../database")

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));



app.post('/marvelORdc', async (req, res) => {
  console.log("params---->", req.body)
  let name = req.body.name;
  try {
    const results = await getCharacterByName({name})
    console.log('results------results', results)
      res.status(200).send(results)
  } catch(err) {
    res.status(400).send("UNABLE TO RETRIEVE CHARACTER INFORMATION")
  }
})

app.get('/allData', async (req, res) => {
  try {
    const allResults = await find()
      console.log('ALLRESULTS', allResults)
      res.status(200).send(allResults)
  } catch(err) {
    console.log(err)
    res.status(400).send("UNABLE TO RETRIEVE ALL CHARACTER INFORMATION")
  }
  // find()
  // .then((data) => {
  //   console.log("ALL DATA FROM DB", data)
  //   res.status(200).send(data)
  // })
  // .catch( (err) => {
  //   console.error(err, "UNABLE TO ALL DATA INFO FROM DB")
  // })
})


app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});