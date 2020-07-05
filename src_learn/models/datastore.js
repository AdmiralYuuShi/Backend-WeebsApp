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
        const result = []
        entities.forEach(e => {
          result.push({
            id: e[datastore.KEY].name,
            title: e.title,
            rating: e.rating
          })
        })
        if (!err) {
          resolve(result)
        } else {
          reject()
        }
      })
    })
  },

  getDataById: (anime_id) => {
    const key = datastore.key(['my_anime', anime_id])
    return new Promise((resolve, reject) => {
      datastore.get(key, (err, entities) => {
        const result = {
          id: entities[datastore.KEY].name,
          title: entities.title,
          rating: entities.rating
        }
        if (!err) {
          resolve(result)
        } else {
          reject()
        }
      })
    })
  },

  addData: (anime_id, anime_title, anime_rating) => {
    const key = datastore.key(['my_anime', anime_id])
    const data = {
      title: anime_title,
      rating: datastore.double(anime_rating),
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
  },

  updateData: (anime_id, anime_title, anime_rating) => {
    const key = datastore.key(['my_anime', anime_id])
    const data = {
      title: anime_title,
      rating: datastore.double(anime_rating),
    }
    return new Promise((resolve, reject) => {
      datastore.update({
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
  },

  deleteData: (anime_id) => {
    const key = datastore.key(['my_anime', anime_id])
    return new Promise((resolve, reject) => {
      datastore.delete(key, (err, apiResp) => {
        if(!err){
          resolve()
        } else {
          reject()
        }
      })
    })
  }

}