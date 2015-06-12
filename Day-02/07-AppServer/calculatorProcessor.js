var calculator = require('./calculator');
module.exports = function(req, res){
 if (req.url.pathname === '/calculator' && req.method==='GET'){
        var operation = req.query.operation,
            n1 =parseInt(req.query.n1, 10),
            n2 = parseInt(req.query.n2, 10);
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    }
     /* else if (req.url.pathname === '/calculator' && req.method==='POST'){
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
    }*/
}
