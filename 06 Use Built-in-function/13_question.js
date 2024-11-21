// Reverse the order of elements in a given array and return the modified array.

// Approach 1

// let arr = [1, 2, 3, 4, 5];

// const reversedArray = (arr) => {
//     return arr.reverse();
// }

// console.log(reversedArray(arr));

// Approach 2

let arr = [1, 2, 3, 4, 5];

const reversedArray = (arr) => {
    return [...arr].reverse();
}

console.log(reversedArray(arr));
console.log(arr);
