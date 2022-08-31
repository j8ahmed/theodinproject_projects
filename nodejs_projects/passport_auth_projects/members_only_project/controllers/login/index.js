const passport = require('../../app').passport

exports.getLoginPage = [
  (req, res, next) => {
    res.render('login')
  }
]

exports.postLoginPage = [
  passport.authenticate('local', {
    successRedirect: 'index',
    failureRedirect: '/login',
  })
]

