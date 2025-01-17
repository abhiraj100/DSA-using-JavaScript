// Return an array of all elements from an array that are palindromes.

let palindromesNumber = [1881, 171, 154, 696, 342];
let result = [];

const checkPalindrome = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let strNum = arr[i].toString();
    let newEle = "";

    for (let j = strNum.length - 1; j >= 0; j--) {
      newEle += strNum[j];
    }

    if (strNum === newEle) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(checkPalindrome(palindromesNumber));
