// Write a program to find the largest element in an array.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let max = myArr[0];

for(let i = 0; i < myArr.length; i++){
    if(max < myArr[i]){
        max = myArr[i];
    }
}

console.log(max);
