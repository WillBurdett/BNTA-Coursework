// This class could also be called 'main'
// Here we are going to create our objects
const Student = require("./student");
const Laptop = require("./laptop");

const alice = new Student("Alice");
const laptop = new Laptop("Apple", "MacBook Pro", "Monterey")

alice.greet();
alice.buyLaptop(laptop);
alice.addProgramToLaptop("Zoom")

