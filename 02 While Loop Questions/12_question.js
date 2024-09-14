// Write a 'while' loop to calculate the sum of all digits in a number.

let num = 12345;
let temp = String(num);
let sum = 0;

let i = 0;
while (i < temp.length) {
    sum += Number(temp[i]);
    i++;
}

console.log(sum);
