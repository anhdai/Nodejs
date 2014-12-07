var through = require('through');
var split = require('split');
var index = 1;
var tr = through(function (buf) {
  this.queue(index % 2 === 0 ?
    buf.toString().toUpperCase()+'\n':
    buf.toString().toLowerCase()+'\n');
  index++;
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);