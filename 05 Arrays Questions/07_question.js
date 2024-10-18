// Write a function to check if an array contains a specific element.

let myArr = [2, 4, 5, 1, 7, 6, 9, 3];
let target = 7;

for(let i = 0; i < myArr.length; i++){
    if(myArr[i] === target){
        console.log(`The given array contains a specific element.`);
        break;
    } 
}