// Import packages
const async = require('async')
const mongoose = require('mongoose')

// Import Mongoose Models
const Item = require('./models/item')
const Category = require('./models/category')

// Connect to database
const mongoDB = 'mongodb://127.0.0.1:27017/inventory_management_app'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection error:'))


// Construct data containers
const items = []
const categories = []

// Construct collection entry contructors
const constructCategory = (name, description, cb) => {
  const category = new Category({name, description})
  category.save((err) => {
    if(err) { 
      cb(err, null)
      return
    }
    console.log('New Category: ' + category)
    categories.push(category)
    cb(null, category)
  })
}

const constructItem = (name, price, description, quantity, category, cb) => {
  const item = new Item({name, price, description, quantity, category})
  item.save((err) => {
    if(err) { 
      cb(err, null)
      return
    }
    console.log('New Item: ' + item)
    items.push(item)
    cb(null, item)
  })
}


// Construct Collection entry executors with sample data
const addCategories = (cb) => {
  async.parallel([
    (callback) => { constructCategory('Fruit', 'Fresh produce, sweet and delicious.', callback) }, 
    (callback) => { constructCategory('Vegetable', 'Fresh produce, healthy and tasty.', callback) }, 
  ], cb)
}
const addItems = (cb) => {
  async.parallel([
    (callback) => { constructItem('Banana', 2.00, 'A delicious fruit', 5, categories[0], callback) }, 
    (callback) => { constructItem('Carrot', 1.00, 'A healthy vegetable', 9, categories[1], callback) }, 
  ], cb)
}

// Run the executors
async.series([
  addCategories,
  addItems,
], (err, results) => {
  if(err) console.log('FINAL ERR: ' + err)
  else console.log('Items: ' + items)
  // All Done, disconnect from db
  mongoose.connection.close()
})
