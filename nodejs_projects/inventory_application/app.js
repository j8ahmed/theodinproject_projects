const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

// Import Routers
const indexRouter = require('./routes')
const itemRouter = require('./routes/item/')
const categoryRouter = require('./routes/category/')

// Connect to Database
mongoose.connect('mongodb://127.0.0.1:27017/inventory_management_app', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))




const app = express()


// Setup views for app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Plug in Application-wide middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Plug in routers
app.use('/', indexRouter)
app.use('/items', itemRouter)
app.use('/categories', categoryRouter)

// Catch all 404 errors and forward to error handler
app.use((req, res, next) => { next(createError(404)) })

//Error Handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('index/error')
})


module.exports = app;
