// let input = "madam";
let input = "dam";

// // first approach
// function checkPalindrome(str){
//     const cleanedStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();

//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// console.log(checkPalindrome(input));


// Second Approach

function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const len = cleanedStr.length;

    for(let i = 0; i < len/2; i++){
        if(cleanedStr[i] !== cleanedStr[len - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(input))

