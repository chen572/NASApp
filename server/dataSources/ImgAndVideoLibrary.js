const axios = require('axios').default

class ImgAndVideoLibrary {
  constructor() {
    this.baseUrl = 'https://images-api.nasa.gov'
  }

  itemReducer(item) {
    return {
      title: item.data[0].title,
      imgUrl: item.links[0].href,
      description: item.data[0].description
    }
  }

  async searchLibrary(searchItem) {
    const results = await axios.get(`${this.baseUrl}/search?q=${searchItem}&media_type=image`).catch(e => e.response)
    return !results.data.reason && results.data.collection.items.length
      ? results.data.collection.items.map(i => this.itemReducer(i))
      : []
  }
}

module.exports = ImgAndVideoLibrary