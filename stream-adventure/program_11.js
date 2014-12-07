var duplexer = require('duplexer');
var spawn = require('child_process').spawn;
module.exports = function(cmd, args) {
  var stream = spawn(cmd, args);
  return duplexer(stream.stdin, stream.stdout);
};