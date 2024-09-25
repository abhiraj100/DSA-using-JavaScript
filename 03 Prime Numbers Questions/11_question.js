// // Write a program to find the sum of prime numbers in 3D matrix.

const matrix = [
    [
        [1, 2, 3],
        [11, 12, 21]

    ], 
    [
        [4, 5, 6],
        [13, 14, 19]
    ],
    [
        [7, 8, 9],
        [15, 17, 23]
    ]
]


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

let primeNumbers = [];

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        for(let k = 0; k < matrix[i][j].length; k++){
            if (isPrime([matrix[i][j][k]])) {
                console.log(matrix[i][j][k]);
                primeNumbers.push(matrix[i][j][k])
            }
        }
    }
}

console.log(primeNumbers);


let sum = 0;

for(let i = 0; i < primeNumbers.length; i++){
    sum += primeNumbers[i];
}

console.log(`Sum of prime numbers in 3D array is : ${sum}`);


