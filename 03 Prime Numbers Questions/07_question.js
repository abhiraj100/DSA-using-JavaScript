// Write a program to sum all prime numbers less than a given number 'n'.

let givenN = 20;

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

for(let i = 1; i <= givenN; i++){
    if(isPrime(i)){
        console.log(i);
        primeNumbers.push(i);
    }
}


let sum = 0;

for(let i = 0; i < primeNumbers.length; i++){
    sum += primeNumbers[i]
}

console.log(`Sum of all prime numbers less than a given number is ${sum}`);
