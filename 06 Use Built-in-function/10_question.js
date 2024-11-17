// Add a new element from an array and return it.

// Approach 1

// let myArr = [2, 3, 1, 6, 2, 8, 1, 10];

// const addElement = (arr) => {
//     let newElement = arr.push(19);
//     return newElement;
// }

// console.log(addElement(myArr));
// console.log(myArr);

// Approach 2

function addElement(arr, newElement) {
    return [...arr, newElement]; // Create and return a new array
}

// Example usage:
let arr = [2, 4, 8];
let updatedArray = addElement(arr, 10);

console.log(updatedArray); // Output: [2, 4, 8, 10]
console.log(arr); 