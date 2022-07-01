var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Old: res.render('index', { title: 'Express' });
  // New:
  res.redirect('/catalog')
});

module.exports = router;
