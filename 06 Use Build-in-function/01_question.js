// Merge two arrays of integers into one array and return it.

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10];

// arr1.push(arr2)
// console.log(arr1);

arr1.push(...arr2)
console.log(arr1);

// let mergedArr = arr1.concat(arr2)
// console.log(mergedArr);

// arr1 = [...arr1, ...arr2]
// console.log(arr1);
