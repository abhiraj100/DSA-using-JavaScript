// Given an array of strings, concatenate them into a single string starting from the last element.

// Approach 1

// let str = ["Codes", "for", "tomorrow"];

// const arrayOfString = (str) => {
//     let reverseArr = str.reverse().join(" ");
//     // console.log(reverseArr);
//     return reverseArr;
// }

// console.log(arrayOfString(str));


// Approach 2

let str = ["Codes", "for", "tomorrow"];

const arrayOfString = (str) => {
    let reverseArr = [...str].reverse().join("");
    return reverseArr;
}

console.log(arrayOfString(str));
console.log(str);
