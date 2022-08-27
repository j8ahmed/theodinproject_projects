const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) => {
  console.log('Inside new LocalStrategy')
  done(null)
}))
console.log(passport)

console.log(passport.authenticate())
