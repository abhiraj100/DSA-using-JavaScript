// Convert an array of mixed data types into a string where elements are separated by commas.

// Approach 1

// let arr = ["abhi", "22", "raj", "452010", "MCA"];

// let mixedArrayIntoString = arr.join(",");

// console.log(mixedArrayIntoString);

// Approach 2

let arr = ["abhi", "22", "raj", "452010", "MCA"];

const mixedArrayToString = (arr) => {
    return arr.reduce((acc, cur) => acc + "," + cur )
}

console.log(mixedArrayToString(arr));
