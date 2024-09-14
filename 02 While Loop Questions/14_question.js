// Write a 'while' loop to find the smallest positive number integer that is divisible by all numbers from 1 to 10.

let num = 0;

let i = 1;

while (i) {
    if (i % 1 == 0 && i%2 == 0 && i % 3 == 0 && i%4 == 0 && i % 5 == 0 && i%6 == 0 && i % 7 == 0 && i%8 == 0 && i%9 == 0 && i%10 == 0) {
        num = i;
        break;
    }
    i++;
}

console.log(num);
