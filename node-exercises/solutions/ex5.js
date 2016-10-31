var fs = require('fs');
var outputFile = process.argv[2];
var text = process.argv[3];

fs.writeFile(outputFile , text + '\n', function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");
    fs.readFile(outputFile, 'utf8', function(err, data) {
        if(err) { return console.log(err); }
        console.log(data);
    });
});