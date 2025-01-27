// First Approach

// let factorial = 1;
// let factOf = 5;

// for(let i = 1; i <= factOf; i++){
//     factorial *= i
// }

// console.log(factorial)


// // Second Approach

// function factorial(n){
//     if(n < 0){
//         return "Factorial not defined for the negative numbers"
//     }

//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(5));


// // Third Approach -> using recursion

// function factorial(n){
//     if(n < 0) return "Factorial not defined for the negative numbers";
//     if(n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// Fourth Approach

function factorial(n){
    if(n < 0){
        return "Factorial not defined for the negative numbers";
    }
    let result = 1;
    while(n > 0){
        result *= n;
        n--;
    }
    return result;
}


console.log(factorial(5))
