const db = require('./data/dbHelpers')

db.findAnimals()
  .then(animals => {
    console.log('animals', animals)
  })
  .catch(err => {
    console.log('issues with animals', err)
  })
