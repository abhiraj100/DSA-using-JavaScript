// Write a program to print odd numbers from an array.


let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < myArr.length; i++){
    if (myArr[i] % 2 !== 0) {
        console.log(myArr[i]);
    }
}
