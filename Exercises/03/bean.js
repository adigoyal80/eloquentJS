function countBs (word, char) {
    if (word == undefined || char == undefined) {
        return;
    }

    var length = word.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
        if(word.charAt(i) === char){
            count++;
        }
    }
    return count;
}



console.log(countBs('Banana Boat','B'));
console.log(countBs('test','t'));