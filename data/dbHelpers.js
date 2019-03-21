const knex = require('knex')

const dbConfig = require('../knexfile')

const db = knex(dbConfig.development)

module.exports = {
  findSpecies: _ => {
    return db('species')
  },
  findZoos: _ => {
    return db('zoos')
      .select('zoos.id', 'zoo_name', 'address')
      .innerJoin('addresses', 'zoo_id', 'zoos.id')
  },
  findAnimals: _ => {
    return db('animals')
      .select('animals.id', 'animal_name', 'species_name', 'zoo_name')
      .innerJoin('species', 'species_id', 'species.id')
      .innerJoin('zoos', 'zoo_id', 'zoos.id')
  }
}
