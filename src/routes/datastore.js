const express = require('express')
const Route = express.Router()

const datastore = require('../controllers/datastore')

Route
  .post('/addData', datastore.addData)
  .get('/getAllData', datastore.getAllData)

module.exports = Route