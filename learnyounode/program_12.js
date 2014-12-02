var http = require('http')
var map = require('through2-map')
var portNumber = Number(process.argv[2])
http.createServer(function(request, response) {
  response.writeHead(200, {'content-type': 'text/plain'})
  if(request.method != 'POST') return response.end('send me a POST\n')
  request.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)
}).listen(portNumber)