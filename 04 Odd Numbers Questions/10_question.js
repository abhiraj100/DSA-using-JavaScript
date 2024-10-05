// Write a function to return a list of odd numbers from a given list.

const listOfOddNumbers = [];

const oddNumbersList = (myList) => {
    for(let i = 0; i < myList.length; i++){
        if(myList[i] % 2 !== 0){
            listOfOddNumbers.push(myList[i])
        }
    }
    console.log(listOfOddNumbers);
}

let myGivenList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function call
oddNumbersList(myGivenList)



// let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const listOfOddNumbers = [];

// const oddNumbersList = (myList) => {
//     for(let i = 0; i < myList.length; i++){
//         if(myList[i] % 2 !== 0){
//             listOfOddNumbers.push(listOfOddNumbers[i])
//         }
//     }
//     console.log(listOfOddNumbers);
// }

// oddNumbersList(myList)
