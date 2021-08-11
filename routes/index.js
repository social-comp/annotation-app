var express = require('express');
const app = require('../app.js');
var router = express.Router();

var appjs = require('../app.js');


// name is a member of myModule due to the export above



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Annotator', filename:appjs.filename, posts:appjs.posts

  });
});









module.exports = router;

