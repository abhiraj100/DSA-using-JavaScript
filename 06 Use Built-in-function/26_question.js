// Find the index of the first occurrence of a specific string in an array of strings. Return -1 if not found.

// Approach 1

// let arr = ["abhi", "harsh", "raj", "aniket", "john", "raj"];
// let specificString = "raj";
// const findFirstOccurrence = (arr, specificString) => {
//   if (arr.includes(specificString)) {
//     let firstOccurrenceIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//       return (firstOccurrenceIndex = arr.indexOf(specificString));
//       break;
//       // return firstOccurrenceIndex;
//     }
//   } else {
//     return -1;
//   }
// };

// console.log(findFirstOccurrence(arr, specificString));

// Approach 2

// let arr = ["abhi", "harsh", "raj", "aniket", "john", "raj"];
// let specificString = "raj";

// const findFirstOccurence = (arr, specificString) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === specificString) {
//             return i; // Return the index immediately when found
//         }
//     }
//     return -1; // If not found, return -1
// }

// console.log(findFirstOccurence(arr, specificString));


// Approach 3

// let arr = ["abhi", "harsh", "raj", "aniket", "john", "raj"];
// let specificString = "raj";

// const findFirstIndex = (arr, specificString) => arr.indexOf(specificString);
// console.log(findFirstIndex(arr, specificString));


// Approach 3

let arr = ["abhi", "harsh", "raj", "aniket", "john", "raj"];
let specificString = "raj";

const findFirstIndex = (arr, specificString) => arr.findIndex((el) => el === specificString);
console.log(findFirstIndex(arr, specificString));