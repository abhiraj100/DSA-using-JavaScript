// Write a 'for' loop to reverse a string.

let str = "ABHIRAJ";

let reverseString = "";

// for(let i = str.length; i > 0; i--){   // str.length is out of bound so in place of str.length we can use str.length - 1
for(let i = str.length-1; i > 0; i--){
    reverseString += str[i];
}

console.log(reverseString);
