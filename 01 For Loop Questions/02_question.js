// Write a 'for' loop to calculate the factorial of a given number 'n'.

// const userNumber = prompt('Enter your number');

// let result = 1;

// for(let i = 1; i <= userNumber; i++){
//     result *= i;
// }

// console.log(`Factorial of ${userNumber} is ${result}`)

const num = 6;

let result = 1;

for(let i = 1; i <= num; i++){
    result *= i;
}

console.log(result)


// recursive way

function fact(num){
    if(num == 1 || num == 0)
    { 
        return 1;
    } else {
        
    return num * fact(num - 1);
    }
}

console.log(fact(5));


// third way

function fact(num){
    if(num == 1 || num == 0) return 1;
    return num * fact(num -1)
}

console.log(fact(5));