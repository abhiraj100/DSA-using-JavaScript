// Write a 'for' loop to print the multiplication table of 5

const num = 5;
console.log(`Table of ${num}`);
console.log("");

for (let i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ${num * i}`);
}

// Approach -2 using function

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

table(5);
