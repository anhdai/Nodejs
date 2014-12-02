var http = require('http');
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  totalData = ''
  response.on("data", function(data) {
    totalData += data
  })
  response.on("end", function() {
    console.log(totalData.length + '\n' + totalData)
  })
})