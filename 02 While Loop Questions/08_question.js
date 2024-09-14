// Write a 'while' loop to generate the Fibonacci sequence up to a given number.

// 0, 1, 1, 2, 3, 5, 8, 13

// Approach 1

// let n = 8;

// let sequence = [0, 1];

// let i = 2;
// while(i < 8){
//     sequence.push(sequence[i-1] + sequence[i-2]);
//     i++;
// }

// console.log(sequence);


// Approach 2

let first = 0;
let second = 1;
let noOfTerms = 8;
let temp = 0;

let i = 1;
while(i <= noOfTerms){
    console.log(first);
    temp = first;
    first = second;
    second = temp + first;
    i++;
}
