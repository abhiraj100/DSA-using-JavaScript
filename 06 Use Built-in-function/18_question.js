// Sort an array of strings in alphabetical order and return the sorted array.

// Approach 1
// let arr = ['v', 'a', 'd', 'j', 'r', 'C', 'A'];
// let arr = ['v', 'a', 'd', 'j', 'r'];

// let sortedArr = arr.sort();
// console.log(sortedArr);

// // Approach 2

// let arr = ["banana", "apple", "orange", "mango"];

// const sortAlphabetically = (arr) => {
//     return arr.sort();
// }

// console.log(sortAlphabetically(arr));

// Approach 3
// let arr = ["Banana", "apple", "orange", "Mango"];

// const sortAlphabetically = (arr) => {
//     return arr.sort((ele1, ele2) => ele1.localeCompare(ele2) )
// }
// console.log(sortAlphabetically(arr));

// Approach 4
// -1: It indicates the first element should be placed before the second element.
// 1: It indicates the first element should be placed after the second element.
// 0: It indicates both elements are considered equal, so no changes to the order are made.

// let arr = ["Banana", "apple", "orange", "Mango"];

// const sortAlphabetically = (arr) => {
//   return arr.sort((ele1, ele2) => {
//     if (ele1.toLowerCase() < ele2.toLowerCase()) {
//       return -1;
//     }
//     if (ele1.toLowerCase() > ele2.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   });
// };
// console.log(sortAlphabetically(arr));

// Approach 5

// let arr = ['v', 'a', 'd', 'j', 'r' , 'B'];

// let arr = ["Banana", "apple", "orange", "Mango"];

// arr.sort((ele1, ele2) => ele1.toLowerCase().localeCompare(ele2.toLowerCase()));

// console.log(arr);

// Approach 6 Bubble sort or Insertion sort

// let arr = ["Banana", "apple", "orange", "Mango"];

// const sortAlphabetically = (arr) => {
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length - 1 - i; j++){
//             if(arr[j].toLowerCase() > arr[j + 1].toLowerCase()){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(sortAlphabetically(arr));

// Approach 7 Selection Sort 
let arr = ["Banana", "apple", "orange", "Mango"];

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j].toLowerCase() < arr[minIndex].toLowerCase()){
                minIndex = j;
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));

