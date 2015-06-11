function getCalculator(){
    var result = 0;
    var calculator = {
        add : function(x,y){
             result += x + y;
        },
        subtract : function(x,y){
             result += x - y;
        },
        multiply : function(x,y){
             result += (x * y);
        },
        divide : function(x,y){
             result += (x / y);
        },
        getResult : function(){
            return result;
        }
    };
    return calculator;
}
module.exports = getCalculator;
