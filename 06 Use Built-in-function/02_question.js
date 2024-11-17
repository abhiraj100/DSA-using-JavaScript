// Determine if all elements in a given array of integers are positive numbers.

let arr1 = [1, 2, 3, 4, -5, 6];

let flag = false
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] < 0){
        flag = true;
        break;
    }
}

if(flag === false){
    console.log(`All elements in a given array of integers are positive numbers`);
} else {
    console.log(`All elements in a given array of integers are not positive numbers`);
}

