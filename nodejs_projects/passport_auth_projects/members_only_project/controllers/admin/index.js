const User = require('../../models/User')
const { body, validationResult } = require('express-validator')


exports.getAdminPage = [
  (req, res, next) => {
    // if the User is logged in...
    if (req.session && req.session.passport && req.session.passport.user)
      res.render('admin', {errors: false})

    // User not logged in, therfore...
    else {
      const err = new Error('User must be logged in to access this page.');
      err.status = 401
      err.message = 'User is not authorized to access this page. User must be logged in to access this page. <a href="/login">Login Here.</a>'
      return next(err)
    } 
  }
]

exports.postAdminPage = [
  body('password', 'Admin Code must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('password', 'Incorrect Admin Code.').equals(process.env.ADMIN),
  (req, res, next) => {
    const errObj = validationResult(req)

    if (!errObj.isEmpty()) {
      res.render('admin', {errors: errObj.errors})
      return
    }
    else {
      User.findByIdAndUpdate(req.user._id, {isAdmin: true}, err => {
	if (err) return next(err)
	//successful - redirect to home page
	res.redirect('/')
      })
    }
  }
]
