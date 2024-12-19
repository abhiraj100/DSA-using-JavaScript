// Use 'reduce()' to count the number of occurrences of each integer in an array.

// // Approach 1

// let arr = [1, 3, 4, 3, 5, 6, 3, 2, 5];

// const result = arr.reduce((a, b) => {
//     a[b] = (a[b] || 0) + 1;
//     return a
// }, {});

// console.log(result);


// Approach 2

let arr = [1, 3, 4, 3, 5, 6, 3, 2, 5];

const result = {};

arr.forEach((num) => {
    result[num] = (result[num] || 0) + 1;
});

console.log(result)
