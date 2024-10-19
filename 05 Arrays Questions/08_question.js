// Write a program to merge two arrays into a single array.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let mergedArray = [];

for(let i = 0; i < arr1.length; i++){
    mergedArray.push(arr1[i]);
}

for(let i = 0; i < arr2.length; i++){
    mergedArray.push(arr2[i]);
}

console.log(mergedArray);


// Approach 2

// const mergedArray = arr1.concat(arr2);
// console.log(mergedArray);

// Approach 3

// arr1.push(...arr2);
// console.log(arr1);

