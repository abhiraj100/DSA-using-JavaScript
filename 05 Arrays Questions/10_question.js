// Write a program to remove duplicates from an array.

let myArr = [1, 2, 3, 1, 4, 4, 5, 6, 5, 5];
let newArray = [];

// for(let i = 0; i < myArr.length; i++){
//     for(let j = 0; j < myArr.length; j++){
//         if(myArr[i] !== myArr[j] && myArr[i] !== newArray[]){
//             newArray.push(myArr[i]);
//             break;
//         }
//     }
// }


for(let i = 0; i < myArr.length; i++){
    for(let j=1+i;j<myArr.length;j++){
        if(myArr[i] === myArr[j]){
            myArr[j]=undefined;
        }
    }
}

for(let i=0;i<myArr.length;i++){
    if(myArr[i]===undefined){

    }
    else{
        console.log(myArr[i]);
        
    }
}


// console.log(myArr);
