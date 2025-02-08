// // Write a 'for' loop to reverse a string.

// let str = "ABHIRAJ";

// let reverseString = "";

// // for(let i = str.length; i > 0; i--){   // str.length is out of bound so in place of str.length we can use str.length - 1
// for(let i = str.length-1; i >= 0; i--){
//     reverseString += str[i];
// }

// console.log(reverseString);

// // using split("").reverse().join("")
// let str1 = "ABHIRAJ";

// let rev = str1.split("").reverse().join("");
// console.log(rev)


// Using Recursion

function reverseString(str){
    if(str === ""){
        return "";
    }

    return reverseString(str.substring(1)) + str[0];
}

let str = "ABHIRAJ";
let rev = reverseString(str);

console.log(rev);

