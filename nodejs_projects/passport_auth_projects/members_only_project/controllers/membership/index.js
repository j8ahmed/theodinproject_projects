const User = require('../../models/User')


exports.getMembershipPage = [
  (req, res, next) => {
    res.render('Membership')
  }
]

exports.postMembershipPage = [
  (req, res, next) => {
    console.log('FILL IN WITH SUBMISSION HANDLING')
    res.redirect('index')
  }
]

