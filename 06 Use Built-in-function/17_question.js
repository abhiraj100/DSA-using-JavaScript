// Implement a function that returns a string representation of the source code of a given array.

let arr = [1, 2, 3, 4, 5];

const stringRepresentation = (arr) => {
    let str = arr.toString().split().toString();
    // return str;
    console.log(str);
}

// console.log(stringRepresentation(arr));
stringRepresentation(arr);


// JSON.stringify() method, which converts an array into its string format, including all its elements
function arrayToSource(arr) {
    return JSON.stringify(arr);
}

let arr2 = [1, 2, 3, 4, 5];
console.log(arrayToSource(arr2));

// JSON.stringify(arr) converts the array into a JSON string representation that includes the brackets and commas.
// Using toString() alone would give a result like "1,2,3,4,5" (without the square brackets).