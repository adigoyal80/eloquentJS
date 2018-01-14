

function min(x, y){
    if ( x == undefined || y == undefined){
        return Error;
    }
    else{
        if(x > y){
            return y;
        } else if ( x < y ){
            return x;
        } else {
            return 'equal';
        }
    }
}

console.log(min(3,6));
console.log(min(0,10));