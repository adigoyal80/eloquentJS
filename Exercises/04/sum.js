
function range(start, end, increment){
    var step = 0;
    if( increment == undefined){
        step = 1;
    } else{
        step = increment;
    }
    var range = [];
    var difference = end - start;

    if (difference < 0){
        for ( var i = 0; i >= difference; i -= step) {
            range.push( end - i);
        }
    } else{
        for ( var i = 0; i <= difference; i += step) {
            range.push( start + i);
        }
    }
    
    return range;
}

function sum(array) {
    var sum = 0;
    for (var i = 0; i< array.length;i++){
        sum += array[i];
    }
    return sum;
}

console.log(range(1,10));
console.log(sum(range(1,10)));

console.log(range(1,10,2));
console.log(sum(range(1,10,2)));

console.log(range(20,10,2));
console.log(sum(range(20,10,2)));