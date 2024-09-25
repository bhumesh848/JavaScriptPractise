const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("enter a number to check if its even or odd ",(userInput) => {
    let numberToCheck = (userInput);
    if(numberToCheck % 2 === 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is Odd");
    }
    rl.close();
});