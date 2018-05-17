// require express from index.js dependency file, create object
var express = require('express');
// app points to express object
var app = express();

// from the URL ending '/', print Hello World
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// EXPERIMENT
app.get('/a', function(req,res){
  res.send('Hello Olivia');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
