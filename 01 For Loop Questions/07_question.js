// Write a 'for' loop to count how many times a specific character appears in a string.

let stringName = "abhiraj";

let target = 'a';
let count = 0;

for(let i = 0; i < stringName.length; i++){
    if(stringName[i] === target){
        count ++;
    }
}

console.log(`Number of times a specific character ' ${target} ' is appears in the string : ${count}`);