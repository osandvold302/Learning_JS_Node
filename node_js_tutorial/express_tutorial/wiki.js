// wiki.js - a wiki route module

var express = require('express'); 
var router = express.Router();

// home page route, a callback whenever '/' is typed
router.get('/',function(req,res){
  res.send('Wiki home page');
});

// about page route
router.get('/about',function(req,res){
  res.send('About this wiki');
});

module.exports = router;
