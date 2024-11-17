// Find the index of the first occurrence of a specific integer in an array. Return -1 if the integer is not found.

// let myArr = [2, 3, 1, 6, 2, 8, 1, 10];
// let indexArr = []
// let target = 1;

// const findIndex = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(myArr[i] === target){
//             indexArr.push(i)
//         } else {
//             indexArr.push(-1);
//         }
//     }
//     // console.log(indexArr[0]);
//     return indexArr[0];
    
// }

// // findIndex(myArr)
// console.log(findIndex(myArr));


// working approach

function findTheIndexOfFirstOccurrence (arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

let givenArray = [1, 2, 3, 4, 5, 6, 7];
let target = 4;

let result = findTheIndexOfFirstOccurrence(givenArray, target);
console.log(result)





