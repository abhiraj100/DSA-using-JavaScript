// Find the last index of a specific integer in an array. Return -1 if the integer is not found.

// Approach 1

// let arr = [57, 657, 786, 124, 642, 1094, 234];

// let target = 1094;
// let specificInteger = [];

// const lastIndexOfSpecificInteger = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             specificInteger.push(arr[i])
//         }
//     }

//     // let index = specificInteger[0].length ;
//     let count = 0;
//     for(let i = 0; i < specificInteger[0].length; i++){
//         count++;
//     }
//     console.log(count);
// }

// lastIndexOfSpecificInteger(arr);


// Approach 2

// let arr = [57, 657, 786, 124, 642, 1094, 234];
// let target = 1094;

// const lastIndexOfSpecificInteger = (arr, target) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === target) {
//             return i; // Return the last index found
//         }
//     }
//     return -1; // Return -1 if the target is not found
// }

// let lastIndex = lastIndexOfSpecificInteger(arr, target);
// console.log(lastIndex); // Output: 5


// Approach 3
function lastIndexOfSpecificInteger(arr, target) {
    return arr.lastIndexOf(target);
}

// Example usage:
let arr = [57, 657, 786, 124, 642, 1094, 234];
let target = 1094;
let lastIndex = lastIndexOfSpecificInteger(arr, target);
console.log(lastIndex); // Output: 5