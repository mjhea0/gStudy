var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var authHelpers = require('../db/helpers');

// get all decks
router.get('/', authHelpers.ensureAuthenticated,
  function(req, res, next) {
  knex.select('*').from('decks')
  .then(function(data) {
    return res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(function(err) {
    return next(err);
  });
});

// get single deck
router.get('/:id', authHelpers.ensureAuthenticated,
  function(req, res, next) {
  knex.select('*')
  .from('decks')
  .where('id', parseInt(req.params.id))
  .then(function(data) {
    return res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(function(err) {
    return next(err);
  });
});

// add new deck
router.post('/', authHelpers.ensureAuthenticated,
  function(req, res, next) {
  knex('decks').insert({
    user_id: req.userInfo.id,
    name: req.body.name,
    description: req.body.description,
  }).returning('id')
  .then(function(deckID) {
    cardsArray = req.body.cards;
    if (cardsArray.length) {
      cardsArray.forEach(function(card) {
        card.deck_id = deckID[0];
      });
      var promises = cardsArray.map(function(newCard) {
        return knex('cards').insert({
          deck_id: newCard.deck_id,
          question: newCard.question,
          answer: newCard.answer
        });
      });
      Promise.all(promises)
      .then(function() {
        return res.status(200).json({
          status: 'success',
        });
      });
    } else {
      return res.status(200).json({
        status: 'success',
      });
    }
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;