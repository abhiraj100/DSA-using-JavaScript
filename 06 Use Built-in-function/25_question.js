// Apply a function to each element of an array that increments each integer by 1.

let arr = [1, 2, 3, 4, 5];

// Approach 1

// const incrementFun = (num) => {
//     let number = num + 1;
//     return number;
// }

// const incrementEachArrayBy1 = (arr) => arr.map((el) => incrementFun(el));
// console.log(incrementEachArrayBy1(arr));

// Approach 2

const incrementEachArrayBy1 = (arr) => arr.map((el) => el + 1);
console.log(incrementEachArrayBy1(arr));
