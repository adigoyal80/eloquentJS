
function isEven(number) {
    if(number == undefined || number < 0) {
        console.log(typeof(number,number));
    } else{
        if ( number == 0 ) {
            return true;
        } else if ( number == 1) {
            return false;
        } else{
            number = number - 2;
           return isEven( number );
        }
    }
   
}

console.log(isEven(100));
console.log(isEven(23));
