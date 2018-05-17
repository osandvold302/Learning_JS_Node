// require express from index.js dependency file, create object
var express = require('express');
// app points to express object
var app = express();

// adding in wiki module
var wiki = require('./wiki.js');

/* 
 * the following was a square.js example which can be found
 * inside node_modules in this directory
*/
/*
// add the square.js module
var square = require('./square');
console.log('The area of a square with width 4 is ' + square.area(4));

// from the URL ending '/', print Hello World
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// EXPERIMENT
app.get('/a', function(req,res){
  res.send('Hello Olivia');
});
*/

// add wiki module to app
app.use('/wiki',wiki);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
