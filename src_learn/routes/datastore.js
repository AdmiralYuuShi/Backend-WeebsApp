const express = require('express')
const Route = express.Router()

const datastore = require('../controllers/datastore')

Route
  .get('/', datastore.getAllData)
  .get('/:id', datastore.getDataById)
  .post('/', datastore.addData)
  .put('/', datastore.updateData)
  .delete('/', datastore.deleteData)

module.exports = Route