const path = require("path")
const mongoose = require("mongoose")
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy

const Schema = mongoose.Schema

const mongoDb = 'mongodb://127.0.0.1:27017/login_logout_example'

mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
  })
)

/* Add Passport Local strategy for later authentication */

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err)
      if (!user) return done(null, false, { message: "Incorrect username" })

      // Check user passwords match
      bcrypt.compare(password, user.password, (err, res) => {
	if (res) {
	  // passwords match! log user in
	  return done(null, user)
	} else {
	  // passwords do not match!
	  return done(null, false, { message: "Incorrect password" })
	}
      })
    })
  })
)

/* Add Serializer and Deserializer for the Session Data */

passport.serializeUser((user, done) => {
  done(null, user.id);
  // User id will be stored 
  // passport sessionmanager.js: done = function(err, obj)
  // passport sessionmanager.js: req.session[self._key].user = obj;
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


const app = express()
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))

/* 
 * In express, you can set and access various local variables 
 * throughout your entire app (even in views) with the locals object. 
 * */
app.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

app.get("/", (req, res) => res.render("index", {user: req.user}))
app.get("/sign-up", (req, res) => res.render("sign-up-form"));

// Login users
app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
)

app.post("/sign-up", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {

    const user = new User({
      username: req.body.username,
      password: hashedPassword
    }).save(err => {
      if (err) return next(err)
      res.redirect("/")
    })

  })
})

app.get("/log-out", (req, res) => {
  req.logout((err) => {
    if (err) return next(err)
    res.redirect("/")
  })
})



app.listen(3000, () => console.log("app listening on port 3000!"))
