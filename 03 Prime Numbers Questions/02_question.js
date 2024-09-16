// Write a function to check if a number is prime and use it to sum all prime numbers up to 100.

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

let i = 1;
while(i <= 100){
    if(isPrime(i)){
        sum += i;
    }
    i++;
}

console.log(`Sum of all prime numbers between 1 to 100 is : ${sum}`);
