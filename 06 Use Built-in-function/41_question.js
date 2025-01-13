// Convert an array of arrays into a string representation where each inner array is joined by commas.

// Approach 1

// let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr = [ ["abc", "def", "ghi"], ["jkl", "mno", "pqr"], ["stu", "vwx", "yz"]];
let newArr = arr.flat().toString();
console.log(newArr);


// Approach 2 (ChatGPT)
let strArr = [ ["abc", "def", "ghi"], ["jkl", "mno", "pqr"], ["stu", "vwx", "yz"]];
let newStrArr = strArr.map((el) => el.join(",")).join(";");
console.log(newStrArr);