
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.bigInteger('createdAt').notNullTable();
    table.bigInteger('updatedAt').notNullTable();
    table.string('username').notNullTable();
    table.string('password').notNullTable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
