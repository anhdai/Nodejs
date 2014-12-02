module.exports = function(filepath, ext, callback) {
  var fs = require('fs');
  fs.readdir(filepath, function(err, file) {
    if(err)  return callback(err);
    valid_files = [];
    for(var i = 0 ; i < file.length ; i++) {
      var temp_ext = file[i].lastIndexOf('.') + 1
      if(!temp_ext) continue
      if(file[i].slice(temp_ext) == ext) {
        valid_files.push(file[i]);
      }
    }
    callback(null, valid_files);
  })
}