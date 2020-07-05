const express = require('express')
const Route = express.Router()

const datastore = require('./routes/datastore')
 
Route
  .use('/datastore', datastore)

module.exports = Route