// Add a new element to the beginning of an array and return the new length of the array.

// Approach 1

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.unshift(10);
// // let abc = arr.unshift(10);
// // console.log(abc);
// let newArr = arr
// console.log(arr);
// console.log(newArr.length);


// easy concept

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let newArr = arr.unshift(6);
// console.log(arr)
// console.log(newArr)


// Approach 2

let arr = [1,2, 3, 4];
console.log(arr)

arr = [10, 20, ...arr];
console.log(arr)
