var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res){
    req.url = (req.url === "/" ? "index.html" : req.url);
    var resourcePath = require('path').join(__dirname, req.url);
    if (fs.existsSync(resourcePath)){
        fs.createReadStream(resourcePath, {encoding : 'utf8'}).pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
