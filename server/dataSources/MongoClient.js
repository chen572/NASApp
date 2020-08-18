require('dotenv').config()
require('mongoose').connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const NasaItem = require('../model/NasaItem')

class MongoClient {
  isValidItem(item) {
    return item.title && item.description && item.imgUrl ? true : false
  }

  getAllItems() {
    return NasaItem.find({})
  }

  getItemByID(id) {
    return NasaItem.findById(id)
  }

  saveItemToDB(item) {
    return new NasaItem(item).save()
  }

  deleteItemFromDbByID(id) {
    return NasaItem.findByIdAndDelete(id)
  }
}

module.exports = MongoClient