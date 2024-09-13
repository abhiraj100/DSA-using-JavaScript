// Write a 'for' loop to find the average of a list of numbers.

const listOfNumbers = [1, 2, 3, 4, 5]
let sum = 0;

for(let i = 0; i < listOfNumbers.length; i++){
    sum += listOfNumbers[i];
}

let average = sum / listOfNumbers.length;

console.log(`Average of list of numbers is: ${average}`)