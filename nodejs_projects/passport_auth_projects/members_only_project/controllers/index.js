const membershipController = require('./membership')
const addMessageController = require('./addMessage')
const userController = require('./user')
const adminController = require('./admin')
const loginController = require('./login')
const signupController = require('./signup')

/* Home Page Controller */

const indexController = [
  (req, res, next) => {
    res.render('index')
  }
]


/* Group all Controllers for export */

module.exports = {
  membership: membershipController,
  addMessage: addMessageController,
  user: userController,
  admin: adminController,
  index: indexController,
  login: loginController,
  signup: signupController,
}
