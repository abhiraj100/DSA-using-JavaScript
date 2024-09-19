// Write a function to sum the first 'n' prime numbers.

let firstPrime = 2;
let nPrime = 69;

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }

    // for(let i = 2; i < num; i++){
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
            break;
        }
    }
    return true;
}

let sum = 0;

for(let i = firstPrime; i <= nPrime; i++){
    if(isPrime(i)){
        sum += i;
        console.log(i);
    }
}

console.log(`Sum of first 'n' prime number is : ${sum}`);
