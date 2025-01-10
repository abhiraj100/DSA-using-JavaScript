// Write a function that returns a string representation of the source code of a given array of objects.

let arr = [
  {
    name: "abhiraj",
    age: 22,
    location: "Indore",
  },
  {
    name: "harsh",
    age: 22,
    location: "Indore",
  },
];

let newArr = arr.map((el) => {
  return {
    name: el.name,
    age: el.age,
    location: el.location,
  };
});

console.log(newArr);

// To get the string representation of the new array of objects
let stringRepresentation = JSON.stringify(newArr, null, 2);

console.log(stringRepresentation);
