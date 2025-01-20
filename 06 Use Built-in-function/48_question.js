// Join an array of date objects into a single string where each date is formatted as 'YYYY-MM-DD'.

const formateDates = (dates) => {
    return dates.map((date) => date.toISOString().split('T')[0]).join(', ');
}

let dates = [new Date(2024, 11, 11), new Date(2024, 11, 10), new Date(2024, 11, 9), new Date(2024, 11, 8)];

console.log(formateDates(dates))



// let date = new Date().toString();
// let date = new Date().toDateString();
// let date = new Date().toTimeString();
// let date = new Date().toISOString();
// let date = new Date().toJSON();
// let date = new Date().toUTCString();
// let date = new Date().toLocaleString();
// let date = new Date().toLocaleDateString();
// let date = new Date().toLocaleTimeString();
// console.log(date)
// console.log(date)

// // console.log(date.getTime());
// // console.log(date.getHours());
// // console.log(date.getMinutes());