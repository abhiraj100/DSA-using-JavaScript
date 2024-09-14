// // Write a 'while' loop to reverse a number.

// // Approach 1
// const numb = '12345';
// let reverseNumber = '';
// let i = numb.length -1;

// while(numb[i] !== undefined){
//     reverseNumber += numb[i]
//     i--;
// }
// console.log(Number(reverseNumber));

// // Approach 2

// let realNumber = '54321';
// let reverseOfNumber = '';

// let j = realNumber.length - 1;

// while(j >= 0){
//     reverseOfNumber += realNumber[j];
//     j--;
// }
// console.log(Number(reverseOfNumber));



// Approach 3

// let num = 12345;
// let temp = String(num);
// let revNum = '';

// let k = temp.length - 1;
// while(k >= 0){
//     revNum += temp[k];
//     k--;
// }
// console.log(revNum);

console.log("-----x---------x-----------x-----");

// Approach 4

let num = 1234;
let temp = String(num);
let rev = 0;

let i = temp.length - 1;
while (i >= 0) {
    rev = rev * 10 + Number(temp[i]);
    i--;
}

console.log(rev);




// console.log(12%10);
// console.log(12/10);

// // split()
// let myName = "ABHIRAJ";
// const myArray = myName.split("");
// // console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// // join()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log(text);









