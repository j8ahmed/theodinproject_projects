const User = require('../../models/User')


exports.getLoginPage = [
  (req, res, next) => {
    res.render('login')
  }
]

exports.postLoginPage = [
  (req, res, next) => {
    console.log('FILL IN WITH SUBMISSION HANDLING')
    res.redirect('index')
  }
]

