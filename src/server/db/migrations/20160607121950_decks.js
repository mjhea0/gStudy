exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table){
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.string('name').notNullable();
    table.text('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
