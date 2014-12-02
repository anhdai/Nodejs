var http = require('http');
urls = process.argv.slice(2)
returned = []
results = []
urls.forEach(function() {returned.push(false)})
urls.forEach(function(url, i) {
  var temp = "";
  http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on("data", function(data) {
      temp += data
    })
    response.on("end", function() {
      console.log(temp)    
    })
  })
})