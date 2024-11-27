// Extract a portion of an array from index `start` to index `end` and return a new array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let extractedArr = arr.slice(2, 5)
// let extractedArr = arr.splice(2, 5)  //
console.log(extractedArr);
console.log(arr);


// Your code is close, but it’s important to note that splice modifies the original array by removing elements. If you only want to extract a portion without altering the original array, you should use slice instead of splice.

// Here's the difference:

// splice(start, count) removes count elements starting from start and returns them. This changes the original array.
// slice(start, end) returns a new array with elements from start to end - 1 without modifying the original array.
