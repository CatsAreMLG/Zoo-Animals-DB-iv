exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoos')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('zoos').insert([
        { zoo_name: 'San Diego Zoo' },
        { zoo_name: 'St. Louis Zoo' }
      ])
    })
}
