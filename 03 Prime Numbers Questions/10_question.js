// Write a function to find the sum of all prime numbers below 1000.

const isPrime = (num) => {
    if(num < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}


let primeNumbersBelow1000 = [];

for(let i = 1; i <= 1000; i++){
    if(isPrime(i)){
        primeNumbersBelow1000.push(i)
    }
}

console.log(primeNumbersBelow1000);

let sum = 0;
for(let i = 0; i < primeNumbersBelow1000.length; i++){
    sum += primeNumbersBelow1000[i];
}

console.log(`Sum of all prime Numbers below 1000 is : ${sum}`);

