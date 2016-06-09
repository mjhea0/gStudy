exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table){
    table.integer('deck_id').references('id').inTable('decks');
    table.text('question').notNullable();
    table.text('answer').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
