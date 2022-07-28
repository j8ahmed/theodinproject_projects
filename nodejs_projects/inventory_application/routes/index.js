const express = require('express') 
const router = express.Router()
const { index } = require('../controllers/indexController')

/* GET Home page */
router.get('/', index)




module.exports = router
