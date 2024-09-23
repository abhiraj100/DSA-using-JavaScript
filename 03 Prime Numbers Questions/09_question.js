// Write a program to calculate the sum of all prime numbers in a list.


const listOfPrime = [2, 4, 5, 6, 7, 8, 9, 10, 11, 15];

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


let sum = 0;
for(let i = 0; i < listOfPrime.length; i++){
    if(isPrime(listOfPrime[i])){
        sum += listOfPrime[i];
    }
}

console.log(`Sum of all prime numbers in a list is : ${sum}`);
