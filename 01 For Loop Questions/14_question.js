// Write a 'for' loop to sum all elements in a 2D array.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
    // console.log(matrix[i][j]);  // it'll print the matrix in the sequence
  }
}

console.log(sum);

