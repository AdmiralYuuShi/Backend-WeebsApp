const { Datastore } = require('@google-cloud/datastore');
const { projectId } = require('../configs/datastore_config');
const datastore = new Datastore(
  { projectId: projectId }
);

module.exports = {

  getAllData: () => {
    const query = datastore.createQuery('my_anime')
    return new Promise((resolve, reject) => {
      datastore.runQuery(query, (err, entities, info) => {
        if(!err){
          resolve(entities)
        } else {
          reject()
        }
      })
    })
  },

  addData: (anime_title, anime_rating) => {
    const key = datastore.key(['my_anime'])
    const data = {
      title: anime_title,
      rating: anime_rating,
    }
    return new Promise((resolve, reject) => {
      datastore.save({
        key: key,
        data: data
      }, (err) => {
        if (!err) {
          resolve()
        } else {
          console.error(err)
          reject()
        }
      })
    })
  }

}