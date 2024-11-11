// Remove the last element from an array and return it.

// Approach 1

// let myArr = [2, 3, 1, 6, 2, 8, 1, 10];

// const removeLastElement = (arr) => {
//     let lastElement = arr.pop();
//     return lastElement;
// }

// console.log(removeLastElement(myArr));



// Approach 2

// let myArr = [2, 3, 1, 6, 2, 8, 1, 10];

// const removeLastElem = (arr) => {
//     // let sortElement = arr.splice(-1, 1);
//     // let sortElement = arr.splice(-1);
//     let sortElement = arr.splice(-2, 3);
//     // let sortElement = arr.splice(-2, 2);
//     return sortElement;
//     // console.log(sortElement);  
// }

// console.log(removeLastElem(myArr));
// console.log(myArr);

// Approach 3

let myArr = [2, 3, 1, 6, 2, 8, 1, 10];

let removedElement = myArr.pop();
console.log(removedElement)