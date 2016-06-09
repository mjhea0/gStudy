exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users')
    .first()
    .returning('*')
  ]).then(function(user) {
    return Promise.join(
      // Deletes ALL existing entries
      knex('decks').del(),
      // Inserts seed entries
      knex('decks').insert(
      {
        user_id: user[0].id,
        name: 'CSS Trivia',
        description: 'Develop your CSS knowledge.'
      }),
      knex('decks').insert(
      {
        user_id: user[0].id,
        name: 'HTML Trivia',
        description: 'Develop your HTML knowledge.'
      }),
      knex('decks').insert(
      {
        user_id: user[0].id,
        name: 'HTML Trivia',
        description: 'Develop your HTML knowledge.'
      })
    );
  });
};