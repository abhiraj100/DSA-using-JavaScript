// Write a program to reverse an array.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let reverseArray = [];

for(let i = myArr.length - 1; i >= 0; i--){
    reverseArray.push(myArr[i]);
}

console.log(reverseArray);
