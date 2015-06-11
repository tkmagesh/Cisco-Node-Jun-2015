var fs = require('fs');

var fileContents = fs.readFileSync('sampleFile.txt', {encoding : 'utf8'});
console.log(fileContents);
