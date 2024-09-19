// Write a program to find the sum of prime numbers in a given range.

const range1 = 67;
const range2 = 98;

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
            break;
        }
    }
    return true;
}

let sum = 0;

for(let i = range1; i <= range2; i++){
    if(isPrime(i)){
        sum += i;
        console.log(i);
    }
}

console.log(`Sum of prime numbers in the range1 to range2 is : ${sum}`);




