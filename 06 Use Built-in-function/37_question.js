// Check if any element in an array of numbers is a prime number.

// // Approach 1

// let arr = [1, 2, 3, 4, 5];

// const isPrime = (num) => {
//     if(num <= 1){
//         return false;
//     }

//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// // let newArr = arr.some((el) => isPrime(el));
// // console.log(newArr);
// console.log(arr.some((el) => isPrime(el)));


// Approach 2

let arr = [1, 2, 3, 4, 5];

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

let primes = arr.filter((el) => isPrime(el));
let hasPrimes = primes.length > 0;

console.log("Primes Number :- ", primes);
console.log("Primes Number :- ", hasPrimes);
