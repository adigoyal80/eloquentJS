function fizzBuzz(limit) {
    for(let i = 1; i <= limit; i++) {
        let output = ''
        if(i % 3 == 0){
            output += 'Fizz'
        }
        if (i % 5 == 0) {
            output += 'Buzz'
        }
        if(output !== ''){
            console.log(output)
        }
    }
}

fizzBuzz(100)