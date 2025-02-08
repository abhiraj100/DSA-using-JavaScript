function reverseANumber(num){
   let reversed = 0;
   
   while(num != 0){
    reversed = (reversed * 10) + num%10;
    num = Math.floor(num/10);
   }

   return reversed;
}

console.log(reverseANumber(156));


// Second Approach -> 

function reverseANumber (num){
    let reverse = num.toString().split('').reverse().join('');
    return Number(reverse);
}

console.log(reverseANumber(138));