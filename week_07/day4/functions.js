
// Functions are just like methods, except they don't necessarily have to attched to objects

//---------------------------------
// NAMED FUNCTION

const greeting = greet("morning", "Alice");

// console.log(greeting);

function greet(timeOfDay, name){
    return (`Good ${timeOfDay}, ${name}`);
}

// previously this would've been Object.method()
// greet("morning", "Alice");

//---------------------------------
// ANONYMOUS FUNCTION

// functions are first-order objects
// using const.let allows us to control the scope of our functions
// you cannot hoist an anonymous function
const sum = function(num1,num2){
    return num1 + num2;
}
//console.log(sum(2,2));

//---------------------------------
// ARROW FUNCTION

const multiply = (num1, num2) => num1 * num2; // implicit return for single lines
console.log(multiply(5,5));

//---------------------------------



