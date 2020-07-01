const express = require('express')
const Route = express.Router()

const datastore = require('../controllers/datastore')

Route
  .post('/addData', datastore.addData)

module.exports = Route