var fs = require('fs'),
    path = require('path');


var staticExtns = ['.html','.jpg','.png','.css','.js','.ico'];
function isStaticResource(resourceName){
    return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}


module.exports = function(req, res){
    if (isStaticResource(req.url.pathname)){
        var resourcePath = require('path').join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath, {encoding : 'utf8'}).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
}
