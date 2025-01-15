// Add several elements to the beginning of an array and return the new length of the array.

// // Approach 1
// let arr = [4, 5, 6];
// let newLength = arr.unshift(1, 2, 3);
// console.log(newLength)
// console.log(arr)

// // Approach 2
// let arr = [4, 5, 6];
// let beginningArr = [1, 2, 3];

// let result = arr.unshift(...beginningArr);
// console.log(result);
// console.log(arr);


// Approach 3
let arr = [4, 5, 6];
let beginningArr = [1, 2, 3];

let result = [...beginningArr, ...arr];
console.log(result);
console.log(arr);