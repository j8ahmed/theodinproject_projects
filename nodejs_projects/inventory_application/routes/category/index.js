const express = require('express') 
const router = express.Router()
const {
  category_get,
  categories_get,
  create_category_get,
  create_category_post,
  update_category_get,
  update_category_post,
  delete_category_get,
  delete_category_post,
} = require('../../controllers/categoryController')


/* Create */
router
  .get('/create', create_category_get)
  .post('/create', create_category_post)

/* Update */
router
  .get('/:id/update', update_category_get)
  .post('/:id/update', update_category_post)

/* Delete */
router
  .get('/:id/delete', delete_category_get)
  .post('/:id/delete', delete_category_post)

/* GET category(s) */
router
  .get('/:id', category_get)
  .get('/', categories_get)

module.exports = router
