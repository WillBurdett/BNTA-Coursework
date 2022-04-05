numbers = [1,2,3,4,5];

// Both 'const' and 'let' can be block and globally scoped 
// 'lexical scope' means vars can be accessed within the blovk and further down, not by the parent/before
let numberToPrint;

// let is restricting the scope of 'number'
// for (let number of numbers){
//     numberToPrint = number
//     console.log(`The value of number inside the loop is ${number}.`)
// }

// console.log(`The value of number outside the loop is ${numberToPrint}.`)


// When referring to an array, we are referring to the memory allocation
const doubledNumbers = [];

for (let number of numbers){
    doubledNumbers.push(number * 2);
}

console.log(doubledNumbers);

// var is part of older specifications of Javascript