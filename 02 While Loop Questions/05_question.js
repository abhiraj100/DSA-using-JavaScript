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
if(num1 < num2){
    i = num1
} else {
    i = num2
}

while(i >= 1){
    if(num1 % i === 0 && num2 % i === 0){
        console.log(i);
        break;
    }
    i--;
}