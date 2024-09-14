// Write a 'while' loop to check if a number is a prime number.

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }

    let i = 2;
    while(i < num){
        if(num % i === 0){
            return false;
            break;
        }
        i++;
    }
    return true;
}

console.log(isPrime(5));