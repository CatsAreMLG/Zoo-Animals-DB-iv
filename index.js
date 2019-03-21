const db = require('./data/dbHelpers')

db.findZoos()
  .then(zoos => {
    console.log('zoos', zoos)
  })
  .catch(err => {
    console.log('issues with zoos', err)
  })
