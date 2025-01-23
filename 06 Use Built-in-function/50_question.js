// Transform an array of numbers into an array of their factorials using the `map()` method.

let arr = [3, 4, 5, 6];
// let fact = 1;

let newArr = arr.map((el) => {
    let fact = 1;
    for(let i = 1; i <= el; i++){
        fact *= i;
    }
    return fact;
} )

console.log(newArr)