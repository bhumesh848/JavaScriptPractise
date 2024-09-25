const readline = require('readline');

function palindromeP(Num){
    let number = Num.toString();
    let result = number.split('').reverse().join('');
    return number === result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a number if its a palindrome or not: ",(userInput) => {

let numberToCheck = Number(userInput);

if(!isNaN(numberToCheck)){
    console.log(palindromeP(numberToCheck) ? "Entered number is palindrome" : "number is not palindrome")
}
else{
    console.log('Invalid Input')
}
rl.close();
});

