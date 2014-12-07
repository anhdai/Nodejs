var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib')
var through = require('through')
module.exports = function () {
  var genres = null;
  function groupBooks(buf) {
    if(buf.length <= 0) return;
    buf = JSON.parse(buf.toString());
    if(buf.type === 'genre') {
      if(genres) {
        this.queue(JSON.stringify(genres)+'\n')
      }
      genres = {
        name: buf.name,
        books: []
      }

    }
    else if (buf.type === 'book') {
      genres.books.push(buf.name);
    }
  }
  function end() {
    if(genres) {
      this.queue(JSON.stringify(genres)+'\n');
    }
    this.queue(null);
  }
  return combine(
    split(),
    through(groupBooks, end),
    zlib.createGzip()
  )
}