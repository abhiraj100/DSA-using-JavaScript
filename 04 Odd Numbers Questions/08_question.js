// Write a program to find the average of all odd numbers in a given range.

let range1 = 5;
let range2 = 20;

let sum = 0;
let count = 0;

for(let i = range1; i <= range2; i++){
    if(i % 2 !== 0){
        count++;
        sum += i;
    }
}

// console.log(count);
// console.log(sum);

let average = Number((sum)/count);

console.log(`The average of all odd numbers in the given array is: ${average}`);
