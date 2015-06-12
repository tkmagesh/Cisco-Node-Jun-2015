var url = require('url'),
    qs = require('querystring');

module.exports = function(req, res, next){
    req.param = function(key){
        return req.body[key] || req.query[key];
    }
    req.url = (req.url === "/" ? "index.html" : req.url);
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    req.body = {};
    if (req.method === "POST"){
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            req.body = qs.parse(data);
            next();
        });
    } else {
        next();
    }
}

