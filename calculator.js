const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter operator ( either +, -, * or / ): ',(userInput) => {
    let enteredOperator = (userInput);
    rl.question('Enter first number ',(userInput1) => {
        let number1 = Number(userInput1);
        rl.question('Enter second number ',(userInput2) => {
            let number2 = Number(userInput2);
        if(enteredOperator == '+'){
            result = number1 + number2;
            console.log("Addition operation performed ",result);
        }else if(enteredOperator == '-'){
            result = number1 - number2
            console.log("Substraction operation performed ",result);
        }
        else if(enteredOperator == '*'){
            result = number1 * number2
            console.log("Multiplication operation performed ",result);
        }
        else{
            result = number1 / number2
            console.log("Division operation performed ",result);
        }
        rl.close();
        });
    });
    
});

