function add(x,y){
    if (!x || !y)
        throw new Error('Invalid arguments');
    console.log('[sp] - returning result');
    return x + y;
}

function usingAdd(x,y){
    try{
        console.log('[sc] - invoking add');
        var result = add(x,y);
        console.log('[sc] - result = ', result);
    } catch (e) {
        console.log('error occured - ', e);
    }
}

function addAsync(x,y, onResult){
    setTimeout(function(){
        var err = null;
        if (!x || !y){
            err = new Error('Invalid arguments');
            onResult(err, null);
            return;
        }
        console.log('[sp] - returning result');
        var result =  x + y;
        onResult(err, result);
    },5000);
}

function usingAddAsync(x,y){
        console.log('[sc] - invoking add');
        addAsync(x,y, function(err, result){
            if (err){
                console.log("Some error - ", err);
            } else {
                console.log('[sc] - result = ', result);
            }
        });
}











