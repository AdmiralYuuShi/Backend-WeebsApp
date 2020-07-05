const datastoreModel = require('../models/datastore')
const { v4: uuidv4 } = require('uuid');

module.exports = {

  getAllData: (req, res) => {
    datastoreModel.getAllData()
      .then((result) => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success get all data',
          data: result
        })
      })
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Failed get all data',
        })
      })
  },

  getDataById: (req, res) => {
    datastoreModel.getDataById(req.params.id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success get data',
          data: result
        })
      })
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Failed get data',
        })
      })
  },

  addData: (req, res) => {
    var id = 'an-' + uuidv4()
    var { title, rating } = req.body
    datastoreModel.addData(id, title, rating)
      .then(() => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success add data',
          data: {
            id,
            title,
            rating
          }
        })
      })
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Failed add data',
        })
      })
  },

  updateData: (req, res) => {
    var { id, title, rating } = req.body
    datastoreModel.updateData(id, title, rating)
      .then(() => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success update data',
          data: {
            id,
            title,
            rating
          }
        })
      })
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Failed update data',
        })
      })
  },

  deleteData: (req, res) => {
    var id = req.body.id
    datastoreModel.deleteData(id)
      .then(() => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success delete data',
        })
      })
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Failed delete data',
        })
      })
  }
}