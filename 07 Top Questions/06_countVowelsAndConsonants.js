// function countVowelsAndConsonants(str){
//     str = str.toLowerCase();

//     const vowels = "aeiou";
//     let vowelCount = 0;
//     let consonantCount = 0;

//     for(let char of str){
//         if(vowels.includes(char)){
//             vowelCount++;
//         } else if(char >= 'a' && char <= 'z'){
//             consonantCount++;
//         }
//     }

//     return {
//         vowel : vowelCount,
//         consonant : consonantCount,
//     }
// }

// let input = "abcdef"
// let result = countVowelsAndConsonants(input);
// console.log("vowel is ", result.vowel)
// console.log("consonant is ", result.consonant)


// Second Approach

function countVowelAndConsonant(str){
    str = str.toLowerCase();

    const vowels = str.match(/[aeiou]/g) || [];
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];

    return {
        vowel : vowels.length,
        consonant : consonants.length,
    }
}


const result = countVowelAndConsonant("abcdef");
console.log("Vowel : ", result.vowel)
console.log("Consonant : ", result.consonant);




// const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];
// What It Does:
// str.match(/[bcdfghjklmnpqrstvwxyz]/g):

// /[bcdfghjklmnpqrstvwxyz]/:
// This is a regular expression that matches any single character in the set [bcdfghjklmnpqrstvwxyz], which represents all lowercase consonants.
// g:
// The global flag, just like in the vowels line, ensures all occurrences of consonants are matched.
// Result:
// Returns an array of matched consonants from the string (e.g., for "hello", it returns ["h", "l", "l"]).
// If no consonants are found, match returns null.