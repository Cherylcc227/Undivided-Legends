const axios = require ('axios');
const config = require ('../config.js');

const getCharacters = () => {
  let options = {
    url: `https://gateway.marvel.com:443/v1/public/characters?`,
    params: {
      'ts': config.ts,
      'apikey': config.apikey,
      'hash': config.hash
    }
  }


return axios(options)
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.log('error', err)
  throw new Error(err)
})
}

module.exports.getCharacters = getCharacters;
