// Remove and return the last element from an array of strings.

// Approach 1

// let arr = ["thor", "hulk", "IronMan"];

// const removeLastElement = (arr) => {
//     let lastElement = arr.pop();
//     console.log(arr);
//     return lastElement;
// }   

// console.log(removeLastElement(arr));

// Approach 2

let arr = ["thor", "hulk", "IronMan"];

// let newArr = arr.splice(-1, 1);
let newArr = arr.splice(-1, 1)[0];  //we use [0] to access the first (and only) element in the array returned by splice.
console.log(newArr)