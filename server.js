const express = require('express')
const bodyParser = require('body-parser')
const router = require('./server/router/router')
require('dotenv').config()

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})