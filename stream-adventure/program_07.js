var http = require('http');
var fs = require('fs');
var through = require('through');
function write(buf) {this.queue(buf.toString().toUpperCase())}
function end() {this.queue(null)}
http.createServer(function(req, res) {
  if(req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
}).listen(process.argv[2]);