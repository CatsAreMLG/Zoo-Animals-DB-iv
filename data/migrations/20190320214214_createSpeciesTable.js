exports.up = function(knex, Promise) {
  return knex.schema.createTable('species', tbl => {
    tbl.increments()
    tbl
      .string('species', 128)
      .notNullable()
      .unique()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('species')
}
