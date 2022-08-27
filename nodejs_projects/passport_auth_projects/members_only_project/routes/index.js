const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.redirect('index')
})


/* Sign-up Page*/
router
  .get('/sign-up', (req, res, next) => {
    res.redirect('sign-up')
  })
  .post('/sign-up', (req, res, next) => {
    res.redirect('sign-up')
  })


/* Login Page */
router
  .get('/login', (req, res, next) => {
    res.redirect('login')
  })
  .post('/login', (req, res, next) => {
    res.redirect('login')
  })


/* Membership Page */
router
  .get('/membership', (req, res, next) => {
    res.redirect('membership')
  })
  .post('/membership', (req, res, next) => {
    res.redirect('membership')
  })


/* Admin Page */
router
  .get('/membership', (req, res, next) => {
    res.redirect('membership')
  })
  .post('/membership', (req, res, next) => {
    res.redirect('membership')
  })

/* Add Message */
router
  .get('/add-message', (req, res, next) => {
    res.redirect('add-message')
  })
  .post('/add-message', (req, res, next) => {
    res.redirect('add-message')
  })


module.exports = router
