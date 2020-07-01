const conn = require('../configs/db_conn')

module.exports = {

  register: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}