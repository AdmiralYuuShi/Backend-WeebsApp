const express = require('express')
const Route = express.Router()

const auth = require('./routes/auth')
const datastore = require('./routes/datastore')

Route
  .use('/auth', auth)
  .use('/datastore', datastore)

module.exports = Route