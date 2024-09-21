// Write a program to find the sum of prime numbers in a matrix.

// Approach 1

// const matrix = [
//     [1, 5, 4],
//     [2, 6, 8],
//     [9, 11, 15]
// ];

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

// let sum = 0;

// for(let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix[i].length; j++){
//         if(isPrime(matrix[i][j])){
//             console.log(matrix[i][j]);

//             sum += matrix[i][j];
//         }
//     }
// }

// console.log(`the sum of prime numbers in a matrix ${sum}`);

// Approach 2

const matrix = [
  [1, 5, 4],
  [2, 6, 8],
  [9, 11, 15],
];

const primeNumber = [];

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (isPrime(matrix[i][j])) {
      console.log(matrix[i][j]);
      primeNumber.push(matrix[i][j]);
    }
  }
}
console.log(primeNumber);

let sum = 0;

for(let i = 0; i < primeNumber.length; i++){
    sum += primeNumber[i];
}


console.log(`Sum of prime number in 2D Matrix is ${sum}`);
