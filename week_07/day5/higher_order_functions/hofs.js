const sum = function(num1, num2){
    return num1 + num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const divide = function(num1, num2){
    return num1 / num2;
}

const manipulateNumbers = function(num1, num2, callback){
       return callback(num1, num2);
}

const total = manipulateNumbers(5, 10, sum);
const product = manipulateNumbers(5, 10, multiply);
const diff = manipulateNumbers(5, 10, subtract);
const quotient = manipulateNumbers(5, 10, divide);

const modulus = manipulateNumbers(5, 10, (a, b) => a % b); // same thing as below
// const modulus = manipulateNumbers(5, 10, function(a, b){return a % b;})

console.log(total);
console.log(product);
console.log(diff);
console.log(quotient);
console.log(modulus);