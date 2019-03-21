exports.up = function(knex, Promise) {
  return knex.schema.createTable('animals', tbl => {
    tbl.increments()
    tbl
      .string('animal_name', 128)
      .notNullable()
      .unique()
    tbl
      .integer('zoo_id')
      .unique()
      .unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl
      .integer('species_id')
      .unique()
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('animals')
}
