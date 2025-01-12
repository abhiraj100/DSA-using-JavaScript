// Replace elements in an array starting at a given index with new elements, and return the modified array.

// // Approach 1 -> using loop
// let arr = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1){
//         arr[i] = "ram";
//     }
// }

// console.log(arr);


// // Approach 2 -> using map

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((item) => item === 1 ? "ram" : item)
// console.log(newArr)

// // Approach 3 -> using splice

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(0, 1, "ram");
// console.log(arr);
// console.log(newArr);

// Approach 4 -> using findIndex

let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex(item => item == 1);
if(index != -1){
    arr[index] = "ram";
}

console.log(arr)

