// let arr = [4,2, 3, 2, 67, 34, 23 , 3, 66, 65, 67];

// function removeDuplicates(arr){
//     let orgArr = [];
//     for(let item of arr){
//         if(!orgArr.includes(item)){
//             orgArr.push(item);
//         }
//     }

//     return orgArr;
// }

// console.log(removeDuplicates(arr))



// // Second Approach -> using set

// let arr = [1, 2, 3, 4, 2, 4, 5]
// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));


// // Third Approach -> filter
// let arr = [1, 2, 3, 4, 2, 4, 5]

// function removeDuplicates(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));



// Fourth Approach -> reduce
let arr = [1, 2, 3, 4, 2, 4, 5]

function removeDuplicates(arr){
    return arr.reduce((unique, item) => {
        if(!unique.includes(item)){
            unique.push(item);
        }
        return unique;
    }, []);
    
}

console.log(removeDuplicates(arr));

