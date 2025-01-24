let input = "cat";

// First Approach
// split(''): Converts the string into an array of characters.
// reverse(): Reverses the array.
// join(''): Joins the array back into a string.

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString(input));


// // Second Approach

// function reverseString(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("world"))


// Third Approach

// function reverseString(str){
//     if(str === ""){
//         return str;
//     }

//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString("hello"))