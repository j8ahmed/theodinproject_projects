const async = require('async')
const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator')

const Item = require('../../models/item/');
const Category = require('../../models/category/');


exports.create_category_get = (req, res, next) => {
  res.render('category/form', {title: 'Add a New Category'})
}

exports.create_category_post = [
  body('name', 'Category name required').trim().isLength({min: 1}).escape(),   // Validate and sanitize the name field
  body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req)              
    const {name, description} = req.body
    const category = new Category({name, description})   

    if (!errors.isEmpty()){
      res.render('category/form', {title: 'Add a New Category', category, errors: errors.array()})
      return
    }
    
    // Check if category already exists
    Category.findOne({name})   
      .exec((err, found_category) => {
	if (err) return next(err)

	if (found_category)
	  res.redirect(found_category.url)    // Category exists, redirect to its detail page.
	else
	  category.save((err) => {
	    if (err) return next(err)
	    res.redirect(category.url)        // Category saved. Redirect to genre detail page.
	  });
      })
  },
]

exports.categories_get = (req, res, next) => {
  Category.find({}, 'name description').exec((err, categories) => {
    if (err) return next(err)
    res.render('category/categories', {title: 'All Iventory Categories', categories})
  })
}

exports.category_get = (req, res, next) => {
  async.parallel({
    category: (callback) => {
      Category.findById(req.params.id).exec(callback)
    },
    items: (callback) => {
      Item.find({categories: req.params.id}).exec(callback)  // Why can one value be passed to the category array?
    }
  }, (err, results) => {
    const {category, items} = results
    // Error check
    if (err)  return next(err)
    if (!results.category) {
      const categoryErr = new Error('Categroy not found')
      categoryErr.status = 404
      return next(categoryErr)
    }

    res.render('category/detail', {title: 'Category Detail Page', category, items})
  })
}

exports.update_category_get = (req, res, next) => {
  Category.findById(req.params.id).exec((err, category) => {
    // Error check
    if (err) return next(err)
    if (!category) {
      const categoryErr = new Error('Categroy not found')
      categoryErr.status = 404
      return next(categoryErr)
    }

    res.render('category/form', {title: `Update Category: ${category.name}`, category})
  })
}

exports.update_category_post = [
  body('name', 'Category name required').trim().isLength({min: 1}).escape(),   // Validate and sanitize the name field
  body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req)              
    const {name, description} = req.body
    const category = new Category({
      name,
      description,
      _id: req.params.id   // Must include or an error will be thrown
    })   

    if (!errors.isEmpty()) {
      res.render('category/form', {title: `Update Category: ${category.name}`, category, errors: errors.array()})
      return
    }
    else
      // Data is valid. Update Category
      Category.findByIdAndUpdate(req.params.id, category, {}, (err, updatedCategory) => {
	if (err) return next(err)
	res.redirect(updatedCategory.url)
      })
  },
]

exports.delete_category_get = (req, res, next) => {
  Category.findById(req.params.id).exec((err, category) => {
    if (err) return next(err)
    if (!category) {
      const categoryErr = new Error('Categroy not found')
      categoryErr.status = 404
      return next(categoryErr)
    }

    res.render('category/delete', {title: 'Delete Category', category})
  })
}

exports.delete_category_post = (req, res, next) => {
  Category.findByIdAndRemove(req.body.categoryid).exec((err, category) => {
    if (err) return next(err)
    res.redirect('/categories')
  })
}

