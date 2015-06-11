var fs = require('fs');

/*fs.readFile('sampleFile.txt', {encoding : 'utf8'}, function(err, data){
    if (!err){
        console.log(data);
    } else {
        console.log("something went wrong - ", err);
    }
});*/
var readCount = 0;
var stream = fs.createReadStream("sampleFile.txt", {encoding : 'utf8'});
stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});
stream.on('end', function(){
    console.log('file read completed with readCount = ', readCount);
});
