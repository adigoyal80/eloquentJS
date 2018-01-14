

/*
    Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. At each position of the grid 
    there is either a space or a “#” character. The characters should 
    form a chess board.
*/

var size = 20;

for ( var i = 1; i<=size; i++){
    var out = '';
    for (var x = 1; x<=size; x++){
        if(i % 2 == 1){
            out += (x % 2 == 1 ? ' ': '#');
        } else{
            out += (x % 2 == 1 ? '#': ' ');
        }
        
    }
    console.log(out);
}