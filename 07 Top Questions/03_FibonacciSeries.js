// // First Approach

// let series = [0, 1];
// let n = 8

// for(let i = 2; i < n; i++){
//     series.push(series[i - 1] + series[i - 2]);
// }

// console.log(series)

// // Second Approach

// let first = 0;
// let second = 1;
// let n = 8;

// for(let i = 1; i <= n; i++ ){
//     console.log(first);
//     let temp = first + second;
//     first = second;
//     second = temp;
// }

// Third Approach

function fibonacciSeries(n){
    const series = [];
    let a = 0, b= 1;

    for(let i = 0; i < n; i++){
        series.push(a);
        [a, b] = [b, a+ b];
    }

    return series;
}

console.log(fibonacciSeries(10));