const readline = require('readline');

function palindromeCheck(Num) {
    let number = Num.toString();
    let result = number.split('').reverse().join('');
    return number === result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number to check if it's a palindrome: ", (userInput) => {

    let numberToCheck = Number(userInput);

    if (!isNaN(numberToCheck)) {
        console.log(palindromeCheck(numberToCheck) ? "The number is a palindrome." : "The number is not a palindrome.");
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }

    rl.close();
});
