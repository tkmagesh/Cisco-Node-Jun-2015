var middlewares = [];

function useMiddleware(middleware){
    middlewares.push(middleware);
}
function run(){
    return function(req, res){
        for(var i=0; i<middlewares.length; i++)
            middlewares[i](req, res);
    }
}

module.exports = {
    use : useMiddleware,
    run : run
};
