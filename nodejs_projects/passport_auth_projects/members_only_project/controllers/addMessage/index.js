const Message = require('../../models/Message')


exports.getAddMessagePage = [
  (req, res, next) => {
    res.render('message')
  }
]

exports.postAddMessagePage = [
  (req, res, next) => {
    console.log('FILL IN WITH SUBMISSION HANDLING')
    res.redirect('index')
  }
]

