const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function checkPositiveNegativeNumber(){
rl.question('Enter a number to check whether positive or negative ',(userInput)=>{
    let enteredNumber = Number(userInput);
    if(enteredNumber > 0){
        console.log("Entered number",enteredNumber,"is a positive number");
    }
    else if(enteredNumber < 0){
        console.log("Entered number",enteredNumber,"is a negative number");
    }
    else if(enteredNumber == 0){
        console.log("Entered number is zero");
    }
    else if(isNaN(enteredNumber)){
        console.log("Plz enter a nunber, Invalid input")
    }
    rl.close();
});

}
checkPositiveNegativeNumber();