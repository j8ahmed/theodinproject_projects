const User = require('../../models/User')


exports.getAdminPage = [
  (req, res, next) => {
    res.render('admin')
  }
]

exports.postAdminPage = [
  (req, res, next) => {
    console.log('FILL IN WITH SUBMISSION HANDLING')
    res.redirect('index')
  }
]
