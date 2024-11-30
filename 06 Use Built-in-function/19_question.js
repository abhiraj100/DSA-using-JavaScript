// Remove `n` elements from an array starting at index `start` and optionally add new elements. Return the removed elements.

// // Approach 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let start = 2
// let n = 4

// let newArr = arr.splice(start, n);
// console.log(newArr);
// console.log(arr);

// Approach 2

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let start = 2;
let n = 4;
let newElements = [10, 11, 12];

const removeAndAddElements = (arr, start, n, ...newElements) => {
    let removedElements = arr.splice(start, n, ...newElements);
    return removedElements;
}

let removed = removeAndAddElements(arr, start, n, ...newElements);
console.log(removed);
console.log(arr);
