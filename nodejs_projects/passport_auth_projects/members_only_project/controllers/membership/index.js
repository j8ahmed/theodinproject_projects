const User = require('../../models/User')
const { body, validationResult } = require('express-validator')


exports.getMembershipPage = [
  (req, res, next) => {
    // if the User is logged in...
    if (req.session && req.session.passport && req.session.passport.user)
      res.render('membership', {errors: false})

    // User not logged in, therfore...
    else {
      const err = new Error('User must be logged in to access this page.');
      err.status = 401
      err.message = 'User is not authorized to access this page. User must be logged in to access this page. <a href="/login">Login Here.</a>'
      return next(err)
    } 
  }
]

exports.postMembershipPage = [
  body('password', 'Membership Code must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('password', 'Incorrect Membership Code.').equals(process.env.MEMBERSHIP),
  (req, res, next) => {
    const errObj = validationResult(req)

    if (!errObj.isEmpty()) {
      res.render('membership', {errors: errObj.errors})
      return
    }
    else {
      User.findByIdAndUpdate(req.user._id, {isMember: true}, err => {
	if (err) return next(err)
	//successful - redirect to home page
	res.redirect('/')
      })
    }
  }
]

