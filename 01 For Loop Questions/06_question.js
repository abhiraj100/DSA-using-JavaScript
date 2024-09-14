// Write a for loop to print the Fibonacci sequence up to a given number of terms.

// 0,1, 1, 2, 3, 5, 8, 13


// Approach 1
let first = 0;
let second = 1;
let numOfTerms = 8

for(let i = 1; i <= numOfTerms; i++){
    console.log(first);
    let temp = first;
    first = second;
    second = temp + first;
}


// Approach 2

let n = 8;

let series = [0, 1];

for(let i = 2; i < 8; i++){
    series.push(series[i-1] + series[i-2]);
}
console.log(series)

