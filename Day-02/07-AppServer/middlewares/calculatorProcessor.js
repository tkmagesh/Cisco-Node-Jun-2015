var calculator = require('./calculator');
module.exports = function(req, res, next){
     if (req.url.pathname === '/calculator'){
        var operation = req.param("operation"),
            n1 =parseInt(req.param("n1"), 10),
            n2 = parseInt(req.param("n2"), 10);
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else {
        next();
    }
}
