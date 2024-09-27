// Write a function to check if a number is odd and use it to sum all odd numbers up to 100.

let sum = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        sum += i;
    }
}

console.log(`Sum of all odd numbers in between 1 to 100 is ${sum}`);
