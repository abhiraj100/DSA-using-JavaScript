// Write a 'for' loop to print all prime numbers between 1 and 50.

// Approach 1

const checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  // let i = 2;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
      break;
    }
  }
  return true;
};

for (let i = 1; i <= 50; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}


// Approach 2 using Math.sqrt()

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
            break;
        }
    }
    return true;
}


for(let i = 1; i <= 50; i++){
    if(isPrime(i)){
        console.log(i);
    }
}