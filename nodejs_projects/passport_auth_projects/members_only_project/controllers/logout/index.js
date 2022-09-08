const passport = require('../../app').passport

exports.getLogoutPage = [
  (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err)
      res.redirect("/")
    })
  }
]

// exports.postLogoutPage = [
//   (req, res, next) => {
//     req.logout((err) => {
//       if (err) return next(err)
//       res.redirect("/")
//     })
//   }
// ]

