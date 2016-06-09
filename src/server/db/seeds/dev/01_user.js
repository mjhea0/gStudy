exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
      email: 'ad@min.com',
      password: 'admin'
    })
  );
};
