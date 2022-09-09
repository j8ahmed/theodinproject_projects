const membershipController = require('./membership')
const addMessageController = require('./addMessage')
const deleteMessageController = require('./deleteMessage')
const userController = require('./user')
const adminController = require('./admin')
const loginController = require('./login')
const logoutController = require('./logout')
const signupController = require('./signup')
const Message = require('../models/Message')

/* Home Page Controller */

const indexController = [
  (req, res, next) => {
    Message.find({}).exec((err, messages) => {
      if (err) return next(err)
      res.render('index', {messages})
    })
  }
]


/* Group all Controllers for export */

module.exports = {
  membership: membershipController,
  addMessage: addMessageController,
  deleteMessage: deleteMessageController,
  user: userController,
  admin: adminController,
  index: indexController,
  login: loginController,
  logout: logoutController,
  signup: signupController,
}
