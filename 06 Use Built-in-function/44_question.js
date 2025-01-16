// Check if every element in an array of numbers is a multiple of a given integer.

// Approach 1

// let arr = [3, 6, 9, 12, 15];
// let arr = [3, 6, 9, 12, 16];
// let givenInteger = 3;

// let result = arr.every((el) => (el % givenInteger === 0))
// console.log(result);


// Approach 2

// let arr = [3, 6, 9, 12, 16];
let arr = [3, 6, 9, 12, 15];
let givenInteger = 0;

let allAreMultiplesOfGivenNumber = true;

// edge cases
if (givenInteger === 0) {
    console.log("Division by zero is not allowed.")
    // throw new Error("Division by zero is not allowed.");
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] % givenInteger !== 0){
        allAreMultiplesOfGivenNumber = false;
        break;
    }
}

console.log(allAreMultiplesOfGivenNumber);
