const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '.env')})

const mongoose = require("mongoose")
const express = require("express")
const session = require("express-session")
const passport = exports.passport = require("passport")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy
const createError = require('http-errors');

const router = require('./routes')
const User = require('./models/User')

/* Setup Database */
const mongodb = process.env.MONGO

mongoose.connect(mongodb, {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'mongo connection error'))


/* 
 * Setup Passport Framework for Authentication with:
 * - Username and Password authentication
 * - Session cookie authentication
*/
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
      if (err) return done(err)
      if (!user) return done(null, false, {message: 'Incorrect Username'})

      // Check that the entered password matches for username
      // Password was hashed when user signed up. comparing hashes
      bcrypt.compare(password, user.password, (err, res) => {
	// passwords hash match, therefore passwords match
	// log user in
	if (res) return done(null, user)
	return done(null, false, {message: 'Incorrect Password'})
      })
    })
  })
)

/* Add Serializer and Deserializer for the Session Authentication */
passport.serializeUser((user, done) => {
  done(null, user.id)
  // User id will be stored 
  // passport sessionmanager.js: done = function(err, obj)
  // passport sessionmanager.js: req.session[self._key].user = obj;
})
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
    // FIlls the req.user property with the found user data
  })
})



const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* Adds app's global middleware */
app.use(session({secret: 'dogs', resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({extended: false}))
/* 
 * In express, you can set and access various local variables 
 * throughout your entire app (even in views) with the locals object. 
*/
app.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

app.use('/', router)

// Catch all 404 errors and forward to error handler
app.use((req, res, next) => { next(createError(404)) })

//Error Handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err.message)

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})



app.listen(3000, () => console.log("app listening on port 3000!"))
