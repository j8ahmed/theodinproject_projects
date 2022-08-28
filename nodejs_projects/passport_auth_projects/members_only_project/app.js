const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '.env')})

const mongoose = require("mongoose")
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy

const router = require('./routes')

const mongodb = process.env.MONGO
console.log(process.env.MONGO)

mongoose.connect(mongodb, {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'mongo connection error'))



const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router)


app.listen(3000, () => console.log("app listening on port 3000!"))
