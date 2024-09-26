const readline = require(readline)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = 0,num2 = 1,nextTerm

rl.question('Enter the number of terms: ',(userInput) =>{
const enteredTerm = Number(userInput);
console.log("fibonacci series till ",userInput,"Number");

for(let i = 1;i<= enteredTerm;i++){
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}

});

