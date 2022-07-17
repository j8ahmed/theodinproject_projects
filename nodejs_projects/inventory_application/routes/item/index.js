const express = require('express') 
const router = express.Router()
const {
  item_get,
  items_get,
  create_item_get,
  create_item_post,
  update_item_get,
  update_item_post,
  delete_item_get,
  delete_item_post,
} = require('../../controllers/itemController')

/* Create */
router
  .get('/create', create_item_get)
  .post('/create', create_item_post)

/* Update */
router
  .get('/:item/update', update_item_get)
  .post('/:item/update', update_item_post)

/* Delete */
router
  .get('/:item/delete', delete_item_get)
  .post('/:item/delete', delete_item_post)

/* GET Item(s) */
router
  .get('/:item', item_get)
  .get('/', items_get)



module.exports = router
