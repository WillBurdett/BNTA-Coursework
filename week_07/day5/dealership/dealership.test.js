const Dealership = require('./dealership');
const Car = require('./car');

test('can get dealership name', () => {
    // given
    const dealership = new Dealership("Blockbuster", 1, [])
    // when
    const actual = dealership.name;
    // then
    const expected = "Blockbuster";
    expect(actual).toBe(expected);
})

test('can get dealership max capacity', () => {
    // given
    const dealership = new Dealership("Blockbuster", 1, [])
    // when
    const actual = dealership.maxCapacity;
    // then
    const expected = 1;
    expect(actual).toBe(expected);
})

test('can get dealership current cars', () => {
    // given
    const car = new Car("BMW", 500.00, "PETROL")
    const dealership = new Dealership("Blockbuster", 1, [car])
    // when
    const actual = dealership.currentCars;
    // then
    const expected = [car];
    expect(actual).toStrictEqual(expected);
})

test('can return current car count', () => {
    // given
    const car = new Car("BMW", 500.00, "PETROL")
    const dealership = new Dealership("Blockbuster", 1, [car])
    // when
    const actual = dealership.currentCarsCount()
    // then
    const expected = 1;
    expect(actual).toBe(expected);
})

test('can add car to dealership', () => {
    // given
    // create car
    const car = new Car("BMW", 500.00, "PETROL");
    // create dealership
    const dealership = new Dealership("Blockbuster", 1, [])
    // when
    dealership.addCar(car)
    const actual = dealership.currentCars;
    // then
    const expected = [car];
    expect(actual).toStrictEqual(expected);
})

test('returns all cars manufacturer', () => {
    // given
    const car = new Car("BMW", 500.00, "PETROL");
    const dealership = new Dealership("Blockbuster", 1, [car])
    // when
    const actual = dealership.eachCarByManufacturer();
    // then
    const expected = ["BMW"];
    expect(actual).toStrictEqual(expected);
})

test('can filter cars by manufacturer', () => {
    // given
    const car1 = new Car("BMW", 500.00, "PETROL");
    const car2 = new Car("FERRARI", 1000.00, "PETROL");
    const dealership = new Dealership("Blockbuster", 1, [car1, car2])
    // when
    const actual = dealership.filterByManufacturer("BMW");
    // then
    const expected = [car1];
    expect(actual).toStrictEqual(expected);
})

test('total value of cars in stock', () => {
    // given
    const car1 = new Car("BMW", 500.00, "PETROL");
    const car2 = new Car("FERRARI", 1000.00, "PETROL");
    const dealership = new Dealership("Blockbuster", 1, [car1, car2])
    // when
    const actual = dealership.sumCarsValue();
    // then
    const expected = 1500.00;
    expect(actual).toBe(expected);
})