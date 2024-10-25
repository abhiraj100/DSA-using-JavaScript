// Write a program to find the index of a specific element in an array.

let myArr = [1, 2, 3, 4, 5, 6]

let specificElement = 5;
let index;

for(let i = 0; i < myArr.length - 1; i++){
    if(myArr[i] === specificElement){
        index = i;
    }
}

console.log(index);
