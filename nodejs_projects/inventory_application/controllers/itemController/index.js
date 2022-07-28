const async = require('async')
const { body, validationResult } = require('express-validator')

const Item = require('../../models/item/');
const Category = require('../../models/category/');

exports.create_item_get = (req, res, next) => {
  Category.find({}).exec((err, categories) => {
    if (err) return next(err)
    res.render('item/form', {title: 'Add a New Item', categories})
  })
}

exports.create_item_post = [
  // Convert the categories to an array
  (req, res, next) => {
    if(!(req.body.categories instanceof Array)){
      if(typeof req.body.categories ==='undefined')
	req.body.categories = []
      else
	req.body.categories = new Array(req.body.categories)
    }
    next()
  },

  // Validate and sanitize fields.
  body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('price', 'Price must not be empty.').trim().notEmpty(),
  body('quantity', 'Quantity must not be empty.').trim().notEmpty(),
  body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req)

    const {name, price, description, quantity, categories} = req.body
    // Construct an Item object with escaped and trimmed data.
    const item = new Item({ 
      name,
      price,
      description,
      quantity,
      categories
    })

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get categories for form
      Category.find({}).exec((err, categories) => {
	if (err) return next(err)

	// Mark our selected categories as checked.
	for (let i = 0; i < categories.length; i++)
	  if (item.categories.indexOf(categories[i]._id) > -1)
	    categories[i].checked='true'

	res.render('item/form', {
	  title: 'Add a New Item',
	  categories
	})
      })
      return
    }
    else
      // Data from form is valid. Save book.
      item.save((err) => {
	if (err) return next(err)
	//successful - redirect to new book record.
	res.redirect(item.url);
      })
  }
]

exports.items_get = (req, res, next) => {
  Item.find({}, 'name price category description')
    .sort({name : 1})
    .populate('categories')
    .exec((err, items) => {
      if (err) return next(err)
      res.render('item/items', {title: 'All Iventory Items', items})
    })
}

exports.item_get = (req, res, next) => {
  Item.findById(req.params.id).populate('categories').exec((err, item) => {
    if (err) return next(err)
    res.render('item/detail', {title: `Item Detail Page: ${item.name}`, item, categories: item.categories})
  })
}

exports.update_item_get = (req, res, next) => {
  async.parallel({
    item: (callback) => {
      Item.findById(req.params.id).populate('categories').exec(callback)
    },
    categories: (callback) => {
      Category.find({}).exec(callback)
    }
  }, (err, results) => {
    // Error check
    if (err) return next(err)
    if (!results.item){
      const itemErr = new Error('Item Not Found')
      itemErr.status = 404
      return next(itemErr)
    }

    const {item, categories} = results

    // Mark our selected categories as checked.
    for (let i = 0; i < categories.length; i++)
      if (item.categories.indexOf(categories[i]._id) > -1)
	categories[i].checked='true'

    res.render('item/form', {
      title: `Update Item: ${item.name}`,
      item,
      categories
    })

  })
}

exports.update_item_post = [
  // Convert the categories to an array
  (req, res, next) => {
    if(!(req.body.categories instanceof Array)){
      if(typeof req.body.categories ==='undefined')
	req.body.categories = []
      else
	req.body.categories = new Array(req.body.categories)
    }
    next()
  },

  // Validate and sanitize fields.
  body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('price', 'Price must not be empty.').trim().notEmpty(),
  body('quantity', 'Quantity must not be empty.').trim().notEmpty(),
  body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req)

    const {name, price, description, quantity, categories} = req.body
    // Construct an Item object with escaped and trimmed data.
    const item = new Item({ 
      _id: req.params.id,    // This is required, or a new ID will be assigned!
      name,
      price,
      description,
      quantity,
      categories
    })

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get categories for form
      Category.find({}).exec((err, categories) => {
	if (err) return next(err)

	// Mark our selected categories as checked.
	for (let i = 0; i < categories.length; i++)
	  if (item.categories.indexOf(categories[i]._id) > -1)
	    categories[i].checked='true'

	res.render('item/form', {
	  title: `Update Item: ${item.name}`,
	  item,
	  categories
	})
      })
      return
    }
    else
      // Data from form is valid. Save book.
      Item.findByIdAndUpdate(req.params.id, item, {}, (err, updatedItem) => {
	if (err) return next(err)
	//successful - redirect to new book record.
	res.redirect(updatedItem.url);
      })
  }
]

exports.delete_item_get = (req, res, next) => {
  Item.findById(req.params.id).populate('categories').exec((err, item) => {
    // Error Check
    if (err) return next(err)
    if (!item){
      const itemErr = new Error('Item Not Found')
      itemErr.status = 404
      return next(itemErr)
    }

    // Render if no errors
    res.render('item/delete', {
      title: 'Delete Item',
      item,
      categories: item.categories
    })
  })
}

exports.delete_item_post = (req, res, next) => {
  Item.findByIdAndRemove(req.body.itemid).exec((err, item) => {
    if (err) return next(err)
    // successful deletion so redirect
    res.redirect('/items')
  })
}

