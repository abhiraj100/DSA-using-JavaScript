// Write a 'for' loop to find the maximum number in any array of integers.

let arr = [1, 3, 15, 24, 12, 10, 19];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

// 2nd
// Write a 'for' loop to find the maximum number in any array of integers.

let arr = [1, 3, 15, 24, 12, 10, 19];

let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);


// using Set
let arr = [1, 3, 15, 24, 12, 10, 19];

let max = Math.max(...new Set(arr));

console.log(max)

// 4th

let arr = [1, 3, 15, 24, 12, 10, 19];

let max = Math.max(...arr);

console.log(max)

// Using Array.prototype.reduce

let arr = [1, 3, 15, 24, 12, 10, 19];

let max = arr.reduce((acc, curr) => curr > acc ? curr: acc, -Infinity)
console.log(max)


// 
let max = arr.length > 0 ? Math.max(...arr) : null;
console.log(max); // ✅ Output: null

