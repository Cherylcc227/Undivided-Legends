const axios = require("axios");
const config = require("../config.js")

const getCharacterByName = async ({name}) => {

try {
  const response = await axios(`https://superheroapi.com/api/${config.token}/search/${name}`)
  //add and return list from db
    console.log('response.data response.data', response.data)
    return response.data
} catch (err){
  console.log("ERROR FROM SUPERHERO HELPER", err)
  throw new Error("Unable to retrieve data from API")
}
}

module.exports.getCharacterByName = getCharacterByName;