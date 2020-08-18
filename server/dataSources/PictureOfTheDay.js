const axios = require('axios').default
require('dotenv').config()

class PictureOfTheDay {
  constructor() {
    this.baseUrl = 'https://api.nasa.gov/planetary/apod'
    this.api_key = process.env.API_KEY
  }

  itemReducer(item) {
    return {
      title: item.title,
      imgUrl: item.url,
      description: item.explanation
    }
  }

  async getPictureOfTheDay() {
    const result = await axios.get(`${this.baseUrl}?api_key=${this.api_key}`).catch(e => e)
    return result.data.error
     ? result
     : this.itemReducer(result.data)
  }
}

module.exports = PictureOfTheDay