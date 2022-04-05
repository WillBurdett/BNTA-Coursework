const Dealership = function(name, maxCapacity, currentCars){
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.currentCars = currentCars;
}

Dealership.prototype.currentCarsCount = function(){
    return this.currentCars.length;
};

Dealership.prototype.addCar = function(car) {
    if (this.currentCarsCount() < this.maxCapacity){
        this.currentCars.push(car);
    } else {
        throw Error("Could not add car to " + this.name + " as the dealership is full.")
    }
}

Dealership.prototype.eachCarByManufacturer = function(){
    const result = [];
    this.currentCars.forEach(e => result.push(e.manufacturer))
    return result;
}

Dealership.prototype.filterByManufacturer = function(manu){
    const result = this.currentCars.filter(e => e.manufacturer === manu);
    return result;
}

Dealership.prototype.sumCarsValue = function(manu){
    let sum = 0; 
    this.currentCars.forEach(e => sum+=e.price);
    return sum;
}

module.exports = Dealership;