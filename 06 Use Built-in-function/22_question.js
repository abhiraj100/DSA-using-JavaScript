// Given an array of arrays, concatenate them into a single flattened array.

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// Approach 1 - using flat()
// let flattenedArray = arr.flat();
// console.log(flattenedArray);


// Approach 2 
let singleFlattenedArray = (arr) => {
    let flattenedArray = [];
    for(let i = 0; i < arr.length; i++){
        flattenedArray += [...arr[i]];
        // flattenedArray.push(...arr[i]);  // ChatGPT 
    }
    return flattenedArray.join(", ");
    // return flattenedArray;  // ChatGPT 
}

console.log(singleFlattenedArray(arr));



// Approach 3
// let convertToFlattenedArray = (arr) => {
//     return flattenedArray = arr.reduce((arr, curr) => arr.concat(curr), []);
// }
// console.log(convertToFlattenedArray(arr));


// Approach 4
// let convertToFlattenedArray = (arr) => {
//     return flattenedArray = arr.reduce((arr, curr) => [...arr, ...curr], []);
// }

// console.log(convertToFlattenedArray(arr));



// easiest way
// let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// const flattenedArray = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(...arr[i])
//     }
//     return newArr;
// }

// console.log(flattenedArray(arr));