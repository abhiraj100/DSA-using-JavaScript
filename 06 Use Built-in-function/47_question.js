// Implement a function to find the index of the first occurrence of a subarray in a 2D array.


let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [4, 5, 6]
]

let target = [4, 5, 6];

const indexOfFirstOccurrence = (arr, index) => {
    for(let i = 0; i < arr.length; i++){
        if(JSON.stringify(arr[i]) === JSON.stringify(target)) {
            return i;
        }
    }
    return -1;
}

console.log(indexOfFirstOccurrence(arr, target))

// My Approach
// const indexOfFirstOccurrence = (arr, start, end, target) => {
//     let subArray = arr.slice(start, end + 1);
//     console.log(subArray)
//     let index = subArray.indexOf(target);
//     return index;
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let start = 2;
// let end = 4;
// let target = 5;

// console.log(indexOfFirstOccurrence(arr, start, end, target));