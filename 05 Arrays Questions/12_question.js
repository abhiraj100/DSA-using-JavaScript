// Write a program to shift all elements of an array to the right by one position.


// let myArr = [1, 2, 3, 4, 5, 6];
// let temp = myArr[myArr.length - 1];

// for(let i = myArr.length-2; i >= 0; i--){
//     let temp2 = myArr[i]
//     myArr[i+1] = temp2;
// }
// myArr[0]=temp;
// console.log(myArr);


let myArr = [1, 2, 3, 4, 5, 6];
let temp = myArr[myArr.length - 1];

for (let i = myArr.length - 1; i > 0; i--) {
    myArr[i] = myArr[i - 1];
}
myArr[0] = temp;

console.log(myArr);
