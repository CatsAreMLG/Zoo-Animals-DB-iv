const knex = require('knex')

const dbConfig = require('../knexfile')

const db = knex(dbConfig.development)

module.exports = {
  findSpecies: _ => {
    return db('species')
  },
  findZoos: _ => {
    return db('zoos')
  },
  findAnimals: _ => {
    return db('animals')
  }
}
