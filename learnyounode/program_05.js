var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
var filepath = process.argv[2];
fs.readdir(filepath, function(err, data){
  if(err) {throw err}
  data.forEach(function(filename) {
    var temp_ext = path.extname(filename);
    if(temp_ext == ext)
      console.log(filename);
  });
});