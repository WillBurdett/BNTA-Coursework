// Constructor function
const Student = function(name){ // name must be capital
    this.name = name; // properties should go here
    this.laptop = null;
}

// Prototype
Student.prototype.greet = function(){
    console.log(`Hello! My name is ${this.name}.`);
}

Student.prototype.buyLaptop = function(laptop){
    this.laptop = laptop;
}

Student.prototype.addProgramToLaptop = function(program){
    this.laptop.install(program)
}

module.exports = Student;


