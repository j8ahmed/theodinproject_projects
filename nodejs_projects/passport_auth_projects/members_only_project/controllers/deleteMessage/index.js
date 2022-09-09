const Message = require('../../models/Message')
const User = require('../../models/User')

exports.getDeleteMessagePage = [
  (req, res, next) => {
    // if the User is logged in...
    if (req.user) {
      const user = User.findById(req.user._id, (err, user) => {
	if (err) next(err)

	if(user.isAdmin){
	  Message.findByIdAndDelete(req.params.id, err => {
	    if (err) next(err)

	    //Delete successful - redirect to home page
	    res.redirect('/')
	  })
	}
	else {
	  const err = new Error('User must be an Administrator.');
	  err.status = 401
	  err.message = 'User is not authorized to perform a deletion. User must be logged in and must be an Administrator. <a href="/login">Login Here.</a><br/><a href="/admin">Become an admin</a>'
	  return next(err)
	}
      })
    }

    // User not logged in, therfore...
    else {
      const err = new Error('User must be logged in to perform a deletion.');
      err.status = 401
      err.message = 'User is not authorized to perform a deletion. User must be logged in and must be an Administrator. <a href="/login">Login Here.</a><br/><a href="/admin">Become an admin</a>'
      return next(err)
    } 
  }
]
