var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    path = require('path'),
    calculator = require('./calculator');

var staticExtns = ['.html','.jpg','.png','.css','.js','.ico'];
function isStaticResource(resourceName){
    return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = (req.url === "/" ? "index.html" : req.url);
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    if (isStaticResource(req.url.pathname)){
        var resourcePath = require('path').join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath, {encoding : 'utf8'}).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === '/calculator' && req.method==='GET'){
        var operation = req.query.operation,
            n1 =parseInt(req.query.n1, 10),
            n2 = parseInt(req.query.n2, 10);
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method==='POST'){
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            var query = qs.parse(data);
            var operation = query.operation,
                n1 =parseInt(query.n1, 10),
                n2 = parseInt(query.n2, 10);
            var result = calculator[operation](n1, n2);
            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
