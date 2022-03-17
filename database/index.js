const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/comic');

const characterSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  alias: String,
  name: String,
  strength: String,
  durability: String,
  speed: String,
  combat: String,
  intelligence: String,
  // {img: {data: Buffer, contentType: String}}
})

const Character = new mongoose.model('Character', characterSchema);

console.log('test DATABASE MongoDB')

const find = () => {
  const docs = Character.find({})
  return docs
}

module.exports= {
  find
}