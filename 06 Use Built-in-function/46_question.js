// For an array of objects, use `forEach()` to log each object's property value to the console.

let arr = [
    {
        name : 'vedant arya',
        age: 0.10,
    },
    {
        name : 'ansh raj',
        age: 6,
    },
    {
        name : 'golu raj',
        age: 5,
    },
    {
        name : 'Radhe shyam',
        age: 3,
    },
];

// arr.forEach((e) => {
//     return {
//         name: e.name,
//         age: e.age,
//     }
// });

// to console the property

arr.forEach((e) => {
    console.log(`Name : ${e.Name} , Age : ${e.Age}`)
});

console.log(arr);

