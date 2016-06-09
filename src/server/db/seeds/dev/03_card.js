exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('decks')
    .returning('*')
  ]).then(function(decks) {
    return Promise.join(
      // Deletes ALL existing entries
      knex('cards').del(),
      // Inserts seed entries
      knex('cards').insert(
      {
        deck_id: decks[0][0].id,
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][0].id,
        question: 'What is the correct HTML for referring to an external style sheet?',
        answer: '<link rel="stylesheet" type="text/css" href="style.css">'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][0].id,
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answer: 'In the <head> section'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][0].id,
        question: 'Which HTML attribute is used to define inline styles?',
        answer: 'style'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][1].id,
        question: 'Which doctype is correct for HTML5?',
        answer: '<!DOCTYPE html>'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][1].id,
        question: 'Which HTML5 element is used to specify a footer for a document or section?',
        answer: '<footer>'
      }),
       knex('cards').insert(
      {
        deck_id: decks[0][1].id,
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][1].id,
        question: 'What is the correct HTML element for inserting a line break?',
        answer: '<br>'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][2].id,
        question: 'Which doctype is correct for HTML5?',
        answer: '<!DOCTYPE html>'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][2].id,
        question: 'Which HTML5 element is used to specify a footer for a document or section?',
        answer: '<footer>'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][2].id,
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language'
      }),
      knex('cards').insert(
      {
        deck_id: decks[0][2].id,
        question: 'What is the correct HTML element for inserting a line break?',
        answer: '<br>'
      })
    );
  });
};