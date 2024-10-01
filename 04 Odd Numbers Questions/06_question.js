// Write a program to find the largest odd number in an array.

let myArray = [5, 4, 2, 7, 9, 12, 11];

let max = myArray[0];

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] % 2 != 0){
        if(max < myArray[i]){
            max = myArray[i];
        }
    }
}

console.log(`The largest odd number in given array is ${max}`);
