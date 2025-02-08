// Write a 'while' loop to find the greatest common divisor (GCD) of two numbers.

// let num1 = 36;
// let num2 = 60;

// let i = num1;
// while(i >= 1){
//     if(num1 % i === 0 && num2 % i === 0){
//         console.log(i);
//         break;
//     }
//     i--;
// }

let num1 = 60;
let num2 = 36;

let i;
if (num1 < num2) {
  i = num1;
} else {
  i = num2;
}

while (i >= 1) {
  if (num1 % i === 0 && num2 % i === 0) {
    console.log(i);
    break;
  }
  i--;
}

// 2nd way
let n1 = 60;
let n2 = 36;

let i;
if (n1 > n2) {
  i = n2;
} else {
  i = n1;
}

while (i >= 1) {
  if (n1 % i === 0 && n2 % i === 0) {
    console.log(i);
    break;
  }
  i--;
}

let a = 60;
let b = 36;

if (a < b) {
  let temp = a;
  a = b;
  b = temp;
}

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log(a);
