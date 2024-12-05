// Check if all elements in an array of strings have a length greater than 3.

// let arr = ["abhi", "harsh", "ravi"];

// const checkStringLength = (arr) => {
//     return arr.map((el) => {
//         if(el.length > 3){
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// }

// console.log(checkStringLength(arr));

// [ true, true, true ]

let arr = ["abhii", "harsh", "ramji"];
// console.log(["abhii", "harsh", "ramji"].every((e)=> e.length>3));
// console.log(["abhii", "harsh", "ram"].some((e)=> e.length>=3));

const checkStringLength = (arr) => {
  let result = arr.map((el) => {
    if (el.length > 3) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

console.log(checkStringLength(arr));
