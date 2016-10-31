var fs = require('fs');
var request = require('request');

fs.readFile("link.txt", "utf8", function(err, data){
    if(err) { return console.log(err); }
    request('https://nodejs.org/api/all.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    })
})