const mongoose = require('mongoose')
const async = require('async')
const { body, validationResult } = require('express-validator')
const Genre = require('../models/genre')
const Book = require('../models/book')

// Display list of all Genre.
exports.genre_list = function(req, res) {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec((err, list_genres) => {
      if(err) return next(err)
      res.render('genre_list', {title: 'Genre List', genre_list: list_genres})
    })
};

// Display detail page for a specific Genre.
exports.genre_detail = (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  async.parallel({
    genre: function(callback) {
      Genre.findById(id)
	.exec(callback);
    },

    genre_books: function(callback) {
      Book.find({ 'genre': req.params.id })
	.exec(callback);
    }

  }, function(err, results) {
    if (err) return next(err)
    // No results.
    if (results.genre == null) {
      var err = new Error('Genre not found');
      err.status = 404;
      return next(err);
    }
    // Successful, so render
    res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
  })
}

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.render('genre_form', {title: 'Create Genre'})
};

// Handle Genre create on POST.
exports.genre_create_post = [
  body('name', 'Genre name required').trim().isLength({min: 1}).escape(),   // Validate and sanitize the name field
  (req, res, next) => {
    const errors = validationResult(req)              // Extract the validation errors from a request
    const genre = new Genre({name: req.body.name})    // Construct Genre object with escaped and trimmed name

    if (!errors.isEmpty()){
      res.render('genre_form', {title: 'Create Genre', genre: genre, errors: errors.array()})
      return
    }

    
    Genre.findOne({'name': req.body.name})   // Data from form is valid. Check if Genre with same name already exists.
      .exec((err, found_genre) => {
	if (err) return next(err)

	if (found_genre)
	  res.redirect(found_genre.url)    // Genre exists, redirect to its detail page.
	else
	  genre.save((err) => {
	    if (err) return next(err)
	    res.redirect(genre.url)        // Genre saved. Redirect to genre detail page.
	  });
      })
  },
]

// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  async.parallel({
    genre: (callback) => {
      Genre.findById(req.params.id).exec(callback)
    },
    genre_books: (callback) => {
      Book.find({'genre': req.params.id}).exec(callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    // No results.
    if (results.genre == null) {
      const genreErr = new Error('Genre not found');
      genreErr.status = 404;
      return next(err);
    }
    // Successful, so render
    res.render('genre_delete', {
      title: 'Genre Detail',
      genre: results.genre,
      genre_books: results.genre_books
    })
  })
};

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
  async.parallel({
    genre: (callback) => {
      Genre.findById(req.body.genreid).exec(callback)
    },
    genre_books: (callback) => {
      Book.find({'genre': req.body.genreid}).exec(callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    // No results.
    if(results.genre_books.length > 0){
      res.render('genre_delete', {
	title: 'Genre Detail',
	genre: results.genre,
	genre_books: results.genre_books
      })
      return
    }

    // Genre has no books. Delete object and redirect.
    Genre.findByIdAndRemove(req.body.genreid, (err) => {
      if(err) return next(err)
      res.redirect('/catalog/genres')
    })
  })
}

// Display Genre update form on GET.
exports.genre_update_get = (req, res, next) => {
  // Get genre, and books for form.
  async.parallel({
    genre: (callback) => {
      Genre.findById(req.params.id)
	.exec(callback)
    },
    books: (callback) => {
      Book.find(callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    if (results.genre == null) {   // No result
      const genreErr = new Error('Genre not found');
      genreErr.status = 404
      return next(genreErr)
    }
    const { genre, books } = results
    // Success.
    res.render('genre_form', {
      title: 'Update Genre',
      book_list: books,
      genre: genre
    })
  })
};

// Handle Genre update on POST.
exports.genre_update_post = [
  body('name', 'Genre name required').trim().isLength({min: 1}).escape(),   // Validate and sanitize the name field
  (req, res, next) => {
    const errors = validationResult(req)              // Extract the validation errors from a request
    const genre = new Genre({name: req.body.name})    // Construct Genre object with escaped and trimmed name

    if (!errors.isEmpty()){
      res.render('genre_form', {title: 'Update Genre', genre: genre, errors: errors.array()})
      return
    }
    
    Genre.findOne({'name': req.body.name})   // Data from form is valid. Check if Genre with same name already exists.
      .exec((err, found_genre) => {
	if (err) return next(err)

	if (found_genre)
	  res.redirect(found_genre.url)    // Genre exists, redirect to its detail page.
	else
	  genre.save((err) => {
	    if (err) return next(err)
	    res.redirect(genre.url)        // Genre saved. Redirect to genre detail page.
	  })
      })
  },
]

