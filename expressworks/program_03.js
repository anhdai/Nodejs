var express = require('express')
var app = express()
var bodyparser = require('body-parser')
urlencodedParser = bodyparser.urlencoded({extended: false})
app.post('/form',urlencodedParser , function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(Number(process.argv[2]))