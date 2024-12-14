// Transform an array of a specific string in an array of their specific property values.

// Approach 1

// let arr = [ 
//     {
//         name : "abhiraj",
//         age : 22
//     },
//     {
//         name : "ankit",
//         age : 24
//     },
//     {
//         name : "harsh",
//         age : 22
//     },
// ]

// let transformedArray = arr.map(el => el.name);
// console.log(transformedArray);


// Approach 2

let arr = [ 
    {
        name : "abhiraj",
        age : 22
    },
    {
        name : "ankit",
        age : 24
    },
    {
        name : "harsh",
        age : 22
    },
]

let newArray = [];

for(let obj of arr){
    newArray.push(obj.name)
}

console.log(newArray);