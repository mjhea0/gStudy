var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var authHelpers = require('../db/helpers');

router.post('/login', function(req, res, next) {
  knex('users').where('email', req.body.email)
  .then(function(data) {
    if(data.length) {
      delete data[0].password;
      var token = authHelpers.generateToken(data[0].id);
      return res.status(200).json({
        status: 'success',
        data: {
          token: token,
          userID: data[0].id
        }
      });
    } else {
      return res.status(401).json({
        status: 'error',
        message: 'Email and/or password are incorrect'
      });
    }
  })
  .catch(function(err) {
    return next(err);
  });
});

router.post('/register', function(req, res, next){
  knex('users').insert({
    email:req.body.email,
    password: req.body.password
  }).returning('*')
  .then(function(data) {
    var token = authHelpers.generateToken(data[0].id);
      return res.status(200).json({
        status: 'success',
        data: {
          token: token,
          userID: data[0].id
        }
      });
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;