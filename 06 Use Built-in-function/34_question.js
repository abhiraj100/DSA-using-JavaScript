// Create a reversed copy of an array without altering the original array.

// Approach 1
// let arr = [1, 2, 3, 4, 5];
// // let newArr = arr.reverse();  // it altering the original array
let newArr = arr.slice().reverse();  // Array.from(arr) creates a shallow copy of the original array arr. This means that newArr is a new array that contains the same elements as arr, but it is a separate object in memory.
console.log(newArr);
console.log(arr);


// slice() Method:
// arr.slice() creates a shallow copy of the original array. This ensures that the original array remains unchanged.
// reverse() Method:
// After creating the copy, calling reverse() on that copy reverses the order of the elements.


// Approach 2

// let arr = [1, 2, 3, 4, 5];

// let newArr = Array.from(arr).reverse();
// console.log(newArr);
// console.log(arr);


// // Approach 3
// let arr = [1, 2, 3, 4, 5];
// let newA = arr.map((e) => e).reverse();
// console.log(newA);

// // Approach 4
// let arr = [1, 2, 3, 4, 5];
// let newA = arr.slice().reverse();
// console.log(newA);


// Approach 5
let arr = [1, 2, 3, 4, 5];
let newA = arr.reduce((acc, curr) => [curr, ...acc], []);
console.log(newA);
