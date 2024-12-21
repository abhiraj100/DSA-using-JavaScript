// Use `reduceRight()` to concatenate an array of sentences starting from the last element.

let sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "The only thing we have to fear is fear itself."
];

// let result = sentences.reduceRight((acc, curr) => acc + " " + curr);
let result = sentences.reduceRight((acc, curr) => acc.concat(curr));
console.log(result)
