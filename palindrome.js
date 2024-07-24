function palindromeCheck(Num) {
    let number = Num.toString();
    let result = number.split('').reverse().join('');
    return number === result;
}

console.log(palindromeCheck(121));  
console.log(palindromeCheck(1111));
