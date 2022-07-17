const express = require('express') 
const router = express.Router()

/* Create/Construct specific item page */
router
  .get('/create', (req, res) => {
    res.send('Get item construction form page')
  })
  .post('/create', (req, res) => {
    res.send('POST item construction form')
  })

/* Update specific item page */
router
  .get('/:item/update', (req, res) => {
    res.send('GET item update form')
  })
  .post('/:item/update', (req, res) => {
    res.send('POST item update form')
  })

/* Delete specific item page */
router
  .get('/:item/delete', (req, res) => {
    res.send('GET item delete form')
  })
  .post('/:item/delete', (req, res) => {
    res.send('POST item delete form')
  })

/* GET specific item page */
router.get('/:item', (req, res) => {
  res.send('Get specific item')
})

/* GET List of items page */
router.get('/', (req, res) => {
  res.send('List of items')
})



module.exports = router
