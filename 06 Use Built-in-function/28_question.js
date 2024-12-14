// Find the last index of a specific string in an array of strings. Return -1 if not found.

// // Approach 1
// let arr = ["thor", "hulk", "IronMan"];
// let specificString = "hulk";
// // let specificString = "abc";

// const findLastIndexOfSpecificString = (arr, searchString) => {
//   if (arr.includes(searchString)) {
//     let spString = arr.indexOf(searchString);
//     let newArr = arr[spString].split("");
//     // console.log(newArr[newArr.length -1]);
//     // return newArr[newArr.length -1];
//     return newArr.length;
//   } else {
//     return -1;
//   }
// };

// // findLastIndexOfSpecificString(arr, specificString)
// console.log(findLastIndexOfSpecificString(arr, specificString));

// Approach 2 (not properly correct)

// let fruits = ["apple", "Orange", "Grapes", "Guava"];
// let searchString = "Grapes";

// const findLastIndex = (arr, str) => {
//     return arr.lastIndexOf(str);
// }

// console.log(findLastIndex(fruits, searchString));

// for(let i = 0; i < arr.length; i++){
//     let result;
//     if(arr[i] === specificString){
//          result = specificString.length -1;
//     } else {
//          result = -1;
//     }
//     return result;
// }

// console.log(result);


// // Approach 3

// // let arr = ["thor", "hulk", "IronMan"];
// let arr = ["ram", "harsh", "anshu", "ram", "viram"];
// let specificString = "ram";

// const findLastIndexOfStr = (arr, str) => {
//     let lastIndex = -1;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === str){
//             lastIndex = i
//         }
//     }
//     return lastIndex;
// }


// console.log(findLastIndexOfStr(arr, specificString));

// // Approach 4

// let arr = ["ram", "harsh", "anshu", "ram", "viram"];
// let specificString = "abc";

// const findLastIndexOfStr = (arr, str) => {
//     let lastIndex;

//     for(let i = arr.length; i >= 0; i--){
//         if(arr[i] === str){
//             lastIndex = i;
//             break;
//         } else {
//             lastIndex = -1;
//         }
//     }
//     return lastIndex;
// }


// console.log(findLastIndexOfStr(arr, specificString));

// Approach 5

let arr = ["ram", "harsh", "anshu", "ram", "viram"];
let specificString = "ram";

const findLastIndexOfStr = (arr, str) => {
    const index = arr.lastIndexOf(str);
    return index !== -1 ? index : -1;
}


console.log(findLastIndexOfStr(arr, specificString));


// // Approach 6
// let arr = ["thor", "hulk", "hulk", "IronMan"];
// let specificString = "hulk";
// // let specificString = "abc";

// const findLastIndexOfSpecificString = (arr, searchString) => {
//   if (arr.includes(searchString)) {
//     let spString = arr.lastIndexOf(searchString);
//     return spString;
//   } else {
//     return -1;
//   }
// };

// // findLastIndexOfSpecificString(arr, specificString)
// console.log(findLastIndexOfSpecificString(arr, specificString));