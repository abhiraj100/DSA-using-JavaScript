// Given two arrays of strings, concatenate them into one array where the first array's elements come first.


// Approach 1
// let arr1 = ["abc", "def"];
// let arr2 = ["ghi", "jkl"];

// let newArr = arr1.concat(arr2);
// console.log(newArr);

// Approach 2
// let arr1 = ["abc", "def"];
// let arr2 = ["ghi", "jkl"];

// let newArr = [...arr1, ...arr2];
// console.log(newArr);

// Approach 3
let arr1 = ["abc", "def"];
let arr2 = ["ghi", "jkl"];
let newArr = arr1.push(...arr2);
console.log(newArr);
console.log(arr1);