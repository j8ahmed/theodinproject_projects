const User = require('../../models/User')


exports.getSignupPage = [
  (req, res, next) => {
    res.render('sign-up')
  }
]

exports.postSignupPage = [
  (req, res, next) => {
    console.log('FILL IN WITH SUBMISSION HANDLING')
    res.redirect('index')
  }
]


