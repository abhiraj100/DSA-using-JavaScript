// Return a new array containing only the objects from an array of objects that have a specific property value.

let arr = [
  {
    name: "abhiraj",
    age: 22,
  },
  {
    name: "ankit",
    age: 24,
  },
  {
    name: "harsh",
    age: 22,
  },
];

let newArr = arr.map((el) => {
  return {
    name: el.name,
  };
});

console.log(newArr);


let arr3 = arr.map((el) => {
    return {
        age : el.age
    }
});

console.log(arr3);


// let newArr = arr.map((el) => ({name: el.name}));
// console.log(newArr)
