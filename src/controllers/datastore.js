const datastoreModel = require('../models/datastore')

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
      }
      )
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
        })
      }
      )
    },
    
    addData: (req, res) => {
      var { title, rating } = req.body
      datastoreModel.addData(title, rating)
      .then(() => {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success add data',
          data: {
            title: title,
            rating: rating
          }
        })
      }
      )
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: true,
        })
      }
      )
  }
}