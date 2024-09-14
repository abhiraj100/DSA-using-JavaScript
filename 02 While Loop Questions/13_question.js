// Write a 'while' loop to determine if a given number is a palindrome.

// let num = 1221;
// let temp = String(num);
// let num2 = '';

// let i = 0;
// while (i < temp.length) {
//     num2 += Number(temp[i]);
//     i++;
// }

// num2 = Number(num2);

// if(num == num2){
//     console.log(`Given number ${num} is Palindrome.`);
// } else {
//     console.log(`Given number ${num} is not Palindrome.`);
// }


// Approach 2

let num = 1221;
let temp = String(num);
let rev = 0;

let i = temp.length - 1;
while(i >= 0){
    rev = rev * 10 + Number(temp[i]);
    i--;
}

if(num === rev){
    console.log("Given number is Palindrome");
} else {
    console.log("Given number is not Palindrome");
}


