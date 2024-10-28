// Write a program to find the intersection of two arrays.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5, 7, 9];
let intersectionArr = [];

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if(arr2[j] === arr1[i]){
            intersectionArr.push(arr2[j]);
            break;
        }
    }
}

console.log(intersectionArr);
