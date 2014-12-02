var http = require('http')
var url = require('url')
var strftime = require('strftime')
var portNumber = Number(process.argv[2])
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'})
  
  var req_url = url.parse(request.url, true)
  var time = req_url.query.iso
  var date = new Date(time)
  var path = req_url.pathname
  if(path == '/api/parsetime') {
    response.end(JSON.stringify({
      hour: Number(date.getHours()),
      minute: Number(date.getMinutes()),
      second: Number(date.getSeconds())
    }))
  }
  if(path == '/api/unixtime')
    response.end(JSON.stringify({ unixtime: date.getTime() }))
}).listen(portNumber)