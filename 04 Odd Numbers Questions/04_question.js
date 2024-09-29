// Write a program to generate a list of odd numbers between two given numbers.

let list = [];

let range1 = 5;
let range2 = 26;

for(let i = range1; i <= range2; i++){
    if(i % 2 !== 0){
        list.push(i)
    }
}

console.log(list);
