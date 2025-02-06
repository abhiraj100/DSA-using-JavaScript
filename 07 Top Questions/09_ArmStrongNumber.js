// Armstrong => 153 => 1^3 + 5^3 + 3^3

function armstrongNumber(num){
    let sum = 0;
    let temp = num;

    while(temp != 0){
        let digit = temp%10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp/10);
    }

    if(num === sum){
        return true;
    } else {
        return false;
    }
}

console.log(armstrongNumber(153));


// Second Approach -> using reduce

function isArmstrongNumber(num){
    let digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

console.log(isArmstrongNumber(153));