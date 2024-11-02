// Given an array of integers, return a new array containing only the even numbers.

let arr1 = [1, 2, 3, 4, -5, 6];

let evenArr = [];

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] % 2 === 0){
        evenArr.push(arr1[i]);
    }
}

console.log(evenArr);
