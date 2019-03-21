exports.up = function(knex, Promise) {
  return knex.schema.createTable('addresses', tbl => {
    tbl.increments()
    tbl
      .string('address', 128)
      .notNullable()
      .unique()
    tbl
      .integer('zoo_id')
      .unique()
      .unsigned()
      .reference('id')
      .inTable('zoos')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('addresses')
}
