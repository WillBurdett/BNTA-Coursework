const numbers = [1, 2, 3, 4, 5];

const doubleNums = [];

for (let i=0; i<numbers.length; i++){
    doubleNums.push(numbers[i] * 2);
}

console.log(numbers);
console.log(doubleNums);

// Acheives the same thing as the logic above. map() is a higher-order function
const doubledNumbers = numbers.map(e => e * 2); // Map returns an array. Applies something to the value, not a boolean.

console.log(doubledNumbers);

const evenNumbers = numbers.filter(e => e % 2 === 0); // Must be a boolean. Filter returns an array.
console.log(evenNumbers);

// forEach can recretae each of the above methods.
// .forEach is another higher-order function.
// It's the most broadly scoped one - like an enhanced loop
numbers.forEach((e) => console.log(e * 2));