// Write a 'for' loop to calculate the sum of squares of numbers from 1 to 'n'

let n = 10;
let result = 0;

for(let i = 1; i <= n; i++){
    result += (i*i);
}

console.log(result);



// Another Approach

let m = 10;
let sum = (m*(m+1)*(2*m + 1))/(6);
console.log(sum)


// ✅ Time Complexity: O(1) (Constant time)
// ✅ Space Complexity: O(1) (No extra memory used)
// ✅ Best for large values of n