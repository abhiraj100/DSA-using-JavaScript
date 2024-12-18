// Append multiple elements to an array return the updated length of the array.

// Approach 1

// let arr = ["thor", "hulk"];

// const appendMultipleElement = (arr, ele1, ele2) => {
//     let updatedArray = arr.push(ele1, ele2);
//     console.log(arr);
//     return updatedArray;
// }

// console.log(appendMultipleElement(arr, "Iron Man", "Black Panther"));

// Approach 2

// let arr = ['ab', 'bc'];
// let app = ['cd', 'de'];

// const appendFun = (arr, app) => {
//     let updatedArray = arr.push(...app);
//     console.log(arr);
//     return updatedArray;
// }

// console.log(appendFun(arr, app));


// Approach 3

let arr = ['ab', 'bc'];
let app = ['cd', 'de'];

const appendFun = (arr, app) => {
    arr.push(...app);
    console.log(arr);
    return arr.length;
}

console.log(appendFun(arr, app));
