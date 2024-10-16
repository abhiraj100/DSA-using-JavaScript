// Write a program to find the average of all elements in an array.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0;

for(let i = 0; i < myArr.length; i++){
    sum += myArr[i];
}

let average = Number((sum)/(myArr.length));

console.log(`The average of all elements in the given array is ${average}`);
