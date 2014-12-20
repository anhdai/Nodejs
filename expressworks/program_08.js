var express = require('express')
var app = express()
var fs = require('fs')
fs.readFile(process.argv[3], function(err, data) {
  if(err) throw err;
  app.get('/books', function(req, res) {
    res.json(JSON.parse(data))
  })
})