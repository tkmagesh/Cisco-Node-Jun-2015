var http = require('http');
var server = http.createServer(function(req, res){
    console.log('A new connection is established');
    res.end();
});
server.listen(8080);
console.log("Server listening on port 8080!");
