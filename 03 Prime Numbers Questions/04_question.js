// Write a program to find and add all prime numbers in an array.

const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 15, 11, 19];
const primeNumArray = [];

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

for(let i = 0; i < myArray.length; i++){
    if(isPrime(myArray[i])){
        sum += myArray[i]
        primeNumArray.push(myArray[i]);
    }
}

console.log(`Sum of all prime numbers in an array is : ${sum}`)
console.log(primeNumArray);

