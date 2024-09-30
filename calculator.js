// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Enter operator ( either +, -, * or / ): ',(userInput) => {
//     let enteredOperator = (userInput);
//     rl.question('Enter first number ',(userInput1) => {
//         let number1 = Number(userInput1);
//         rl.question('Enter second number ',(userInput2) => {
//             let number2 = Number(userInput2);
//         if(enteredOperator == '+'){
//             result = number1 + number2;
//             console.log("Addition operation performed ",result);
//         }else if(enteredOperator == '-'){
//             result = number1 - number2
//             console.log("Substraction operation performed ",result);
//         }
//         else if(enteredOperator == '*'){
//             result = number1 * number2
//             console.log("Multiplication operation performed ",result);
//         }
//         else{
//             result = number1 / number2
//             console.log("Division operation performed ",result);
//         }
//         rl.close();
//         });
//     });
    
// });

// Calculator program in a function

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculate(operator, num1, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(`Addition operation performed: ${result}`);
            break;
        case '-':
            result = num1 - num2;
            console.log(`Subtraction operation performed: ${result}`);
            break;
        case '*':
            result = num1 * num2;
            console.log(`Multiplication operation performed: ${result}`);
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
            } else {
                result = num1 / num2;
                console.log(`Division operation performed: ${result}`);
            }
            break;
        default:
            console.log("Invalid operator! Please enter one of +, -, *, or /.");
    }
}


rl.question('Enter operator ( either +, -, * or / ): ', (operator) => {
    rl.question('Enter first number: ', (userInput1) => {
        const number1 = Number(userInput1);
        rl.question('Enter second number: ', (userInput2) => {
            const number2 = Number(userInput2);
            
            if (isNaN(number1) || isNaN(number2)) {
                console.log("Please enter valid numbers.");
            } else {
                calculate(operator, number1, number2); // Call the function
            }

            rl.close(); 
        });
    });
});
