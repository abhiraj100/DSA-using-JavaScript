// let num1 = 24;
// let num2 = 60;

// function gcdOfTwoNumber(num1, num2){
//     let temp;
//     if(num1 > num2){
//         temp = num2;
//     } else {
//         temp = num1;
//     }

//     let gcd;

//     for(let i = temp; i >= 1; i--){
//         if(num1%i === 0 && num2%i === 0){
//             gcd = i;
//             break;
//         }
//     }

//     return gcd;
// }

// console.log(gcdOfTwoNumber(num1, num2));


// Second Approach -> Using the Euclidean Algorithm

// function gcd(a, b){
//     while(b !== 0){
//         const temp = b;
//         b = a%b;
//         a = temp;
//     }

//     return a;
// }

// console.log(gcd(24, 60));

function gcd(a, b){
    while(b !== 0){
        const temp = b;
        b = a%b;
        a = temp;
    }

    return a;
}

console.log(gcd(24, 60))