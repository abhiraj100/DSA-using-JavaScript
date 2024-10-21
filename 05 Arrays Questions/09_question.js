// Write a program to find the second largest element in an array.

let myArr = [2, 5, 3, 8, 6];

for(let i = 0; i < myArr.length; i++){
    for(let j = 0; j < myArr.length; j++){
        if(myArr[j] > myArr[j+1]){
            let temp = myArr[j];
            myArr[j] = myArr[j + 1];
            myArr[j+1] = temp;
        }
    }
}

console.log(myArr);

console.log(`Second largest element in the array is ${myArr[myArr.length -2]}`);


