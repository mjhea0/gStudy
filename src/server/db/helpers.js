var moment = require('moment');
var jwt = require('jwt-simple');
var knex = require('./knex');

function generateToken(user) {
  var payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user
  };
  var token = jwt.encode(payload, process.env.SECRET_KEY);
  return token;
}

function ensureAuthenticated(req, res, next) {
  // check headers for the presence of an auth object
  if(!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'fail',
      message: 'No header present or no authorization header.'
    });
  }
  // decode the token
  var header = req.headers.authorization.split(' ');
  var token = header[1].replace(/"/g, "");
  var payload = jwt.decode(token, process.env.SECRET_KEY);
  var now = moment().unix();
  // ensure that the decoded token is valid
  if(now > payload.exp || payload.iat > now) {
    return res.status(401).json({
      status: 'fail',
      message: 'Token is invalid'
    });
  }
  // ensure user is still in the database
  knex('users')
  .where('id', payload.sub)
  .first()
  .then(function(user) {
    // if in database, let them access the route and assign
    // the user info to the request object
    req.userInfo = user;
    next();
  })
  .catch(function(err) {
    return next(err);
  });
}

module.exports = {
  generateToken: generateToken,
  ensureAuthenticated: ensureAuthenticated
};