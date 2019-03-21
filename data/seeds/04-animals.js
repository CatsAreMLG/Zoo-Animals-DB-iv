exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('animals').insert([
        { animal_name: 'Snuffles', species_id: 1, zoo_id: 1 },
        { animal_name: 'Cornelius', species_id: 2, zoo_id: 1 },
        { animal_name: 'Athena', species_id: 3, zoo_id: 2 }
      ])
    })
}
