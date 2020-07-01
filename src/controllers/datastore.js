const datastoreModel = require('../models/datastore')
const { v4: uuidv4 } = require('uuid');

module.exports = {

  addData: (req, res) => {
    var id = uuidv4()
    var {title, rating} = req.body
    datastoreModel.addData(id, title, rating)
      .then(() => {
        res.status(200).json({
          status: 200,
          error: false,
          data: {
            id: id,
            title: title,
            rating: rating
          }
        })
      }
      )
      .catch(() => {
        res.status(400).json({
          status: 400,
          error: false,
        })
      }
      )
  }
}