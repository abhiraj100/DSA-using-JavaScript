// Write a 'while' loop to calculate the factorial of a given number 'n'.

const num = 5;
let fact = 1;

let i = 1;
while(i <= num){
    fact *= i;
    i++
}

console.log(fact);
