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

app.use('/', indexRouter)
app.use('/items', itemRouter)
app.use('/categories', categoryRouter)








module.exports = app;
