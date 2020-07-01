const authModel = require('../models/auth')
const bcrypt = require('bcryptjs')
const saltRounds = 10
const emailRegex = require('../helpers/email_regex')
require('dotenv').config()


module.exports = {

  register: (req, res) => {
    const { email, name, username } = req.body
    const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(saltRounds))
    const data = { email, password, name, username,}

    if (emailRegex.test(email)) {
      authModel.register(data)
        .then(result => {
          res.status(200).json({
            status: 200,
            error: false,
            user: {
              username,
              name,
              email,
            },
            detail: result,
            message: 'Successfully Register New User'
          })
        })
      .catch(_err => {
        console.log('AAAAAAAAAAAAAAAAAAAAa')
        console.log(_err)
        res.status(400).json({
          status: 400,
          error: true,
          detail: _err
        })
      })
    } else {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Email not valid'
      })
    }
  }
}