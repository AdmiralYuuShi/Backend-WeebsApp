const { Datastore } = require('@google-cloud/datastore');
const { projectId } = require('../configs/datastore_config');
const datastore = new Datastore(
  { projectId: projectId }
);

module.exports = {

  addData: (anime_id, anime_title, anime_rating) => {
    console.log('here')
    const key = datastore.key(['my_anime']);
    const data = {
      id: anime_id,
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