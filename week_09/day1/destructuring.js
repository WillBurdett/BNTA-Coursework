// const names = ["Darshil", "Robyn", "Adib", "Anna", "Colin"];
// console.log(names);

// // const darshil = names[0];
// // console.log(darshil);

// const [darshil, , robyn, ...remainingNames] = names;
// console.log(darshil);
// console.log(robyn);
// console.log(remainingNames);

const person = {
    name : "Erin",
    age : 9
}

// const firstName = person.name;
// const personAge = person["age"]; // same thing as line above, diffferent syntax

const {name, age} = person;
console.log(name);
console.log(age);