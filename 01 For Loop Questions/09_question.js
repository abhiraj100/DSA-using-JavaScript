// Write a 'for' loop to find the maximum number in any array of integers.

let arr = [1, 3, 15, 24, 12, 10, 19];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
