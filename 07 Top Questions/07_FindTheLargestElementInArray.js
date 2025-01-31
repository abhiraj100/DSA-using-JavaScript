// let arr = [5, 2, 4, 3, 9, 6, 7];

// function findLargestElement(arr){
//     let largest = arr[0];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findLargestElement(arr));


// // Second Approach using reduce method

// let arr = [5, 2, 4, 3, 9, 6, 7];

// function findLargest(arr){
//     return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
// }

// console.log(findLargest(arr));


// // Third Approach -> using Math.max

// let arr = [5, 2, 4, 3, 9, 6, 7];

// function findLargest(arr){
//     return Math.max(...arr);
// }

// console.log(findLargest(arr));

// Fourth Approach -> using sort

let arr = [5, 2, 4, 3, 9, 6, 7];

function findLargest(arr){
    arr.sort((a,b) => b - a);
    return arr[0];
}

console.log(findLargest(arr))
