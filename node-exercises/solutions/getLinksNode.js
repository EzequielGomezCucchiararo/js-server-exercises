var request = require('request');
var fs = require('fs');
var txtSearch = process.argv[2] || "";
var baseUrl = 'https://nodejs.org/api/all.html';
var outputFile = 'results.txt';

txtSearch = txtSearch.toLowerCase();

request('https://nodejs.org/api/all.html', function (error, response, body) {

  if (!error && response.statusCode == 200) {

    var regExLinks = /href="([^"]*)"/g
    var urlLinks = body.match(regExLinks);
    var internal = urlLinks.filter(function( link ) {
    	return link.indexOf('="#') != -1
    })
		var found = internal.filter(function( link ) {
    	return link.indexOf(txtSearch) != -1;
    })
	var uniqueArray = found.filter(function(item, pos) {
	    return found.indexOf(item) == pos;
	})
    var finalUrls = uniqueArray.map(function(path, pos) {
        var filteredPath = path.replace('href="','');
        var cleanedPath = filteredPath.substring(0, filteredPath.length - 1);
        return baseUrl + cleanedPath;
    })

    fs.writeFile(outputFile , finalUrls.join('\n'), function(err) {
        if(err) { return console.log(err); }
        console.log("The file was saved!");
        fs.readFile(outputFile, 'utf8', function(err, data) {
            if(err) { return console.log(err); }
            console.log(data);
        });
    });
  }
})