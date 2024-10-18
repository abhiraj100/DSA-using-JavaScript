// Write a program to sort an array in ascending order.

let myArr = [2, 4, 5, 1, 7, 6, 9, 3];

for(let i = 0; i < myArr.length - 1; i++){
    for(let j = 0; j < myArr.length-1; j++){
        if(myArr[j] > myArr[j+1] ){
            let temp = myArr[j]
            myArr[j] = myArr[j+1];
            myArr[j+1] = temp;
        }
    }
}

console.log(myArr);
