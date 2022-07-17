const express = require('express') 
const router = express.Router()


/* Construct a new category page */
router
  .get('/create', (req, res) => {
    res.send('GET category Construction form page')
  })
  .post('/create', (req, res) => {
    res.send('POST category Construction form')
  })

/* Update a category page */
router
  .get('/:category/update', (req, res) => {
    res.send('GET category update form page')
  })
  .post('/:category/update', (req, res) => {
    res.send('POST category update form')
  })

/* Delete a category page */
router
  .get('/:category/delete', (req, res) => {
    res.send('GET category delete form page')
  })
  .post('/:category/delete', (req, res) => {
    res.send('POST category delete form')
  })


/* GET specific category page */
router.get('/:category', (req, res) => {
  res.send('Specific of category detail page')
})

/* GET List of categories page */
router.get('/', (req, res) => {
  res.send('List of categories')
})

module.exports = router
