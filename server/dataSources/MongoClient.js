require('mongoose').connect('mongodb://localhost/NASApp', { useNewUrlParser: true, useUnifiedTopology: true })
const NasaItem = require('../model/NasaItem')

class MongoClient {
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