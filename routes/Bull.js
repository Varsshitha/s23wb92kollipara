var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Bull', { title: 'Search Results Bull' });
});

module.exports = router;
