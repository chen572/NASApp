const ImgAndVideoLibrary = require('./ImgAndVideoLibrary')
const MongoClient = require('./MongoClient')
const PictureOfTheDay = require('./PictureOfTheDay')

class DataSources {
  constructor() {
    this.ImgAndVideoAPI = new ImgAndVideoLibrary()
    this.PictureOfTheDayAPI = new PictureOfTheDay()
    this.MongoClient = new MongoClient()
  }
}

module.exports = DataSources