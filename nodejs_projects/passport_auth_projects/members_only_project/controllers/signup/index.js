const User = require('../../models/User')
const bcrypt = require('bcryptjs')


exports.getSignupPage = [
  (req, res, next) => {
    res.render('sign-up')
  }
]

exports.postSignupPage = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    const user = new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashedPassword,
    }).save(err => {
      if (err) return next(err)
      res.redirect('/')
    })
  })
}


