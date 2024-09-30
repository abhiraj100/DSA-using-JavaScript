// Write a program to calculate the sum of all odd numbers from 1 to 'n'.

let n = 100;
let sum = 0;

for(let i = 1; i <= n; i++){
    if(i % 2 !== 0){
        sum += i;
    }
}

console.log(`Sum of all odd numbers from 1 to n is ${sum}`);
