const express = require('express')
const router = express.Router()
const DataSources = new (require('../dataSources/DataSources'))()

router.get('/item', async (req, res) => {
  const { id } = req.query;

  res.send(
    id
      ? await DataSources.MongoClient.getItemByID(id)
      : await DataSources.MongoClient.getAllItems()
  )
})

router.post('/item', async (req, res) => {
  const { item } = req.body;
  if (DataSources.MongoClient.isValidItem(item)) {
    res.send(await DataSources.MongoClient.saveItemToDB(item))
  } else {
    res.sendStatus(400)
  }
})

router.delete('/item', async (req, res) => {
  const { id } = req.query;
  const deltedItem = await DataSources.MongoClient.deleteItemFromDbByID(id)
  if (DataSources.MongoClient.isValidItem(deltedItem)) {
    res.sendStatus(204)
  } else {
    res.sendStatus(400)
  }
})

router.get('/picture', async (req, res) => {
  res.send(await DataSources.PictureOfTheDayAPI.getPictureOfTheDay())
})

router.get('/search', async (req, res) => {
  const { q } = req.query;
  res.send(await DataSources.ImgAndVideoAPI.searchLibrary(q))
})

module.exports = router