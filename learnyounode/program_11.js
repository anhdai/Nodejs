var http = require('http')
var fs = require('fs')
var portNumber = Number(process.argv[2])
http.createServer(function(request, response) {
  response.writeHead(200, {"content-type":"text/plain"})
  var src = fs.createReadStream(process.argv[3])
  src.pipe(response)
}).listen(portNumber)