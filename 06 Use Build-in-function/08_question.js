// Given an array of numbers, return a new array with each number squared.

// Approach 1

// let arr = [2, 4, 8, 10];

// let squaredNumberArray = [];

// for(let i = 0; i < arr.length; i++){
//     // squaredNumberArray.push(Math.sqrt(arr[i]));
//     squaredNumberArray.push(Math.pow(arr[i], 2));
// }

// console.log(squaredNumberArray);

// Approach 2

let arr = [2, 4, 8, 10];

let squaredNumber = arr.map((num) => Math.pow(num, 2));

console.log(squaredNumber)
