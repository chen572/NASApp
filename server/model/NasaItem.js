const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NasaItemSchema = new Schema({
  title: String,
  imgUrl: String,
  description: String
})

const NasaItem = mongoose.model('NasaItem', NasaItemSchema)
module.exports = NasaItem