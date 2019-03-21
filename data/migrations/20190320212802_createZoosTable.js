exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoos', tbl => {
    tbl.increments()
    tbl.string('zoo_name', 128).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('zoos')
}
