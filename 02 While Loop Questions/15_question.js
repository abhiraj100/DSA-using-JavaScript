// Write a 'while' loop to calculate the sum of all even numbers between 1 and 100.

let sum = 0;

let i = 1;

while (i <= 100) {
    if (i % 2 == 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
