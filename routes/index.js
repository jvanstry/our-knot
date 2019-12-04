var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rache Jer Wed' });
});

router.get('/us', function(req, res, next){
  res.render('us', { title: 'We Take on World'});
});

router.get('/one-knee', function(req, res, next){
  res.render('one-knee', { title: 'The Proposal'})
});

module.exports = router;
