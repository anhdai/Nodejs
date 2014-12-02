var through = require('through');
var tr = through(write, end);
tr.write('beep\n');
tr.write('boop\n');
function write (buf) { console.log(buf.toString().toUpperCase()) }
function end {}
process.stdin.pipe(tr).pipe(process.stdout);