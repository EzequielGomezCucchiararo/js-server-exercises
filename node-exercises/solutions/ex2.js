var fs = require('fs')
var filename = process.argv[2] || 'test.txt';

fs.readFile( filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data)
});