const Message = require('../../models/Message')
const { body, validationResult } = require('express-validator')


exports.getAddMessagePage = [
  (req, res, next) => {
    // if the User is logged in...
    if (req.session && req.session.passport && req.session.passport.user)
      res.render('add-message')

    // User not logged in, therfore...
    else {
      const err = new Error('User must be logged in to access this page.');
      err.status = 401
      err.message = 'User is not authorized to access this page. User must be logged in to access this page. <a href="/login">Login Here.</a>'
      return next(err)
    } 
  }
]

exports.postAddMessagePage = [
  body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('text', 'Text must not be empty.').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req)
    const {title, text} = req.body

    // Reload page on error with previous values
    if (!errors.isEmpty()) {
      res.render('add-message', {title, text} )
      return
    }
    else {
      const message = new Message({
	title,
	text,
	author: req.user._id
      })

      message.save((err) => {
	if (err) return next(err)
	//successful - redirect to home page
	res.redirect('/')
      })
      return
    }
  }
]

