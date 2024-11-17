// Given an array of integers, return the sum of all the elements.

// Approach 1

// let arr = [1, 2, 3, 4, 5];

// const sumAllElements = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumAllElements(arr));

// Approach 2
let arr = [1, 2, 3, 4, 5];

const sumAllElements = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(sumAllElements(arr));


let arr1 = [1, 2, 3, 4, 5];

const sumAll = (arr) => {
    let sum = 0;
    arr.forEach((el) => {
        sum += el;
    });
    return sum;
}

console.log(sumAllElements(arr1));


// function addElement(arr, newElement) {
//     return arr.reduce((acc, curr) => {
//         acc.push(curr); // Push the current element into the accumulator
//         return acc;     // Return the accumulator for the next iteration
//     }, [newElement]); // Initialize the accumulator with the new element
// }

// // Example usage:
// let arr = [2, 4, 8];
// let updatedArray = addElement(arr, 10);

// console.log(updatedArray); // Output: [10, 2, 4, 8]