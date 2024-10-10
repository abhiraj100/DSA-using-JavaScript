// Write a program to count the number of even and odd numbers in an array.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = 0;
let odd = 0;

for(let i = 0; i < myArr.length; i++){
    if(myArr[i] % 2 === 0){
        even++;
    } else {
        odd++;
    }
}

console.log(`Number of even count in the array is ${even}`);
console.log(`Number of odd count in the array is ${odd}`);
