module.exports = function(req, res){
    console.log("response ended in not found action");
    res.statusCode = 404;
    res.end();
}
