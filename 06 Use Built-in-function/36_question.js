// Extract a new array from the middle of an existing array using `slice()`

// Approach 1
// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.slice((arr.length/2));
// console.log(newArray);

// Approach 2
let arr = [1, 2, 3, 4, 5];
let middleIndex = Math.floor(arr.length/2);
console.log(middleIndex)

const middleElement = arr.slice(middleIndex, middleIndex + 1);
console.log(middleElement);
console.log(arr)

// // Approach 3
// let arr = [1, 2, 3, 4, 5];
// let start = Math.floor(arr.length/2) - 1; // in case 
// let end = Math.ceil(arr.length/2) + 1;

// let newArray = arr.slice(start, end);
// console.log(newArray);
