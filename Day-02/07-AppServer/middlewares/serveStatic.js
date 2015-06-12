var fs = require('fs'),
    path = require('path');


var staticExtns = ['.html','.jpg','.png','.css','.js','.ico'];
function isStaticResource(resourceName){
    return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}


module.exports = function(defaultDir){
    defaultDir = defaultDir || 'public';

    return function(req, res, next){
        if (isStaticResource(req.url.pathname)){
            var resourcePath = require('path').join(__dirname, "../", defaultDir, req.url.pathname);
            console.log(resourcePath);
            if (fs.existsSync(resourcePath)){
                fs.createReadStream(resourcePath, {encoding : 'utf8'}).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        } else {
            next();
        }
    }
}
