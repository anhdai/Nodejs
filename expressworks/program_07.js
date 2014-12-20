var express = require('express')
var app = express()
app.get('/search', function(req, res) {
  res.send({results:req.query.results, type:req.query.type, page:req.query.page})
}).listen(process.argv[2]);