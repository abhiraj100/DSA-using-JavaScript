// Implement a function that prints each string from a given array of Strings in uppercase.

let str = ['a', 'b', 'h', 'i'];

// const upperCaseArray = (pStr) => {
//     return pStr.toString().toUpperCase().split();
// }

const upperCaseArray = (pStr) => {
    return pStr.map(e => e.toUpperCase());
}

console.log(upperCaseArray(str));

// output : [ 'A,B,H,I' ]



// Approach 2

let userArr = ["h", "a", "r", "s", "h"];

const lowerToUpperCaseArray = (str) => {
    const result = [];
    str.array.forEach(element => {
        result.push(element.toUpperCase());
    });
    return result;
}

console.log(lowerToUpperCaseArray(userArr));