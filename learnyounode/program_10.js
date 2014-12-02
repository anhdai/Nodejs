var net = require('net')
var strftime = require('strftime')
var portNumber = Number(process.argv[2])
console.log(portNumber)
net.createServer(function(socket) {
  var timeSocket = strftime("%F %R")
  socket.write(timeSocket+"\n")
  socket.end()
}).listen(portNumber)