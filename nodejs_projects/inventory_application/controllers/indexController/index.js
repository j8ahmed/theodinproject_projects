const async = require('async')

const Item = require('../../models/item/');
const Category = require('../../models/category/');

exports.index = (req, res, next) => {
  async.parallel({
    item_count: (callback) => {
      Item.countDocuments({}, callback) 
    },
    category_count: (callback) => {
      Category.countDocuments({}, callback)
    },
  }, (err, results) => {
    res.render('index/home', {title: 'Inventory Management Application', error: err, data: results})
  })
}
