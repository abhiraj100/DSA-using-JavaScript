// Remove and return the first element from an array of objects.

// Approach - 1
// let arr = [1, 2, 3, 4, 5];
// let removeFirstElement = arr.shift();
// console.log(removeFirstElement);
// console.log(arr);

// // Approach - 2

// let arr = [1, 2, 3, 4, 5];

// // Use destructuring to remove the first element
// const [removeFirstElement, ...newArr] = arr;
// console.log(removeFirstElement);
// console.log(newArr);
// console.log(arr);


// Approach 3
let arrayOfObjects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let [removedObject, ...restOfObjects] = arrayOfObjects;
console.log(removedObject);
console.log(restOfObjects);
 

// // Approach 4
// let arrayOfObjects = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];

// let removedObject = arrayOfObjects.shift();
// console.log(removedObject);
// console.log(arrayOfObjects);
 

