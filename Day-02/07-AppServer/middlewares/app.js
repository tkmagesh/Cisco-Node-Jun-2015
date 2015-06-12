var middlewares = [];

function useMiddleware(middleware){
    middlewares.push(middleware);
}
function run(){
    return function(req, res){
        function iterate(req, res, middlewares){
            var first = middlewares[0],
                remaining = middlewares.slice(1),
                next = function(){
                    iterate(req, res, remaining)
                };
            if (typeof first === "function"){
                first(req, res, next);
            }
        }
         iterate(req, res, middlewares);
    }
}

module.exports = {
    use : useMiddleware,
    run : run
};
