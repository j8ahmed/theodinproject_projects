const router = require('express').Router()
const {signup, login, admin, membership, index, addMessage } = require('../controllers')

router.get('/', index)


/* Sign-up Page*/
router
  .get('/sign-up', signup.getSignupPage)
  .post('/sign-up', signup.postSignupPage)


/* Login Page */
router
  .get('/login', login.getLoginPage)
  .post('/login', login.postLoginPage)


/* Membership Page */
router
  .get('/membership', membership.getMembershipPage)
  .post('/membership', membership.postMembershipPage)


/* Admin Page */
router
  .get('/membership', admin.getAdminPage)
  .post('/membership', admin.postAdminPage)


/* Add Message */
router
  .get('/add-message', addMessage.getAddMessagePage)
  .post('/add-message', addMessage.postAddMessagePage)


module.exports = router