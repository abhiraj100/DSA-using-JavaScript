// Write a function to count the number of odd numbers in a list.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let count = 0;

for(let i = 0; i < list.length; i++){
    if(list[i] % 2 !== 0){
        count++;
    }
}

console.log(`Number of odd numbers in the given list is: ${count}`);
