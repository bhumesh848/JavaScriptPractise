const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter first number : ',(userInput1)=>{
let num1 = Number(userInput1);

rl.question('Enter secound number : ',(userInput2)=>{
    let num2 = Number(userInput2);
 
rl.question('Enter third number :',(userInput3)=>{
    let num3 = Number(userInput3);

if(num1 >= num2 && num1 >= num3){
    console.log("Number 1 is largest");
}else if(num2 >= num1 && num2 >= num3){
    console.log("Number 2 is largest ");
}else{
    console.log("Number 3 is largest");
}

    rl.close();
 });
});
});
