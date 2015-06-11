var express = require('express');
var app = express();

app.use(function(req, res){
  setTimeout(function() {
  	res.status(200).send(Date.now()+'')
  }, 200);
});

var server = app.listen(3000);