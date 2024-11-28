// Determine if at least one element in an array of integers is negative.

let arr = [1, 2, 3, -4, 5];

// Approach 1

// let checkAtleastOneNegative = arr.some((el) => el < 0);
// console.log(checkAtleastOneNegative);

// Approach 2
// const checkAtleastOneNegative = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             return true;
//             break;
//         }
//     }
//  return false;
// }

// console.log(checkAtleastOneNegative(arr));


// Approach 3

const checkAtleastOneIsNegative = (arr) => {
    let result = arr.map((el) => el < 0);
    return result.includes(true);
}

console.log(checkAtleastOneIsNegative(arr))

// Approach 4
// const checkAtleastOneNegative = (arr) => {
//     let result = arr.map((el) => {
//         return el < 0;
//     })

//     if(result.includes(false)){
//         return false;
//     } 
//     return true;
// }

// console.log(checkAtleastOneNegative(arr));