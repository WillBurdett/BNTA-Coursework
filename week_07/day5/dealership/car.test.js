const Car = require('./car')

test('can create car and get manufacturer', () => {
    const car = new Car("BMW", 500.00, "PETROL");
    const actual = car.manufacturer;
    const expected = "BMW";
    expect(actual).toBe(expected)
})

test('can create car and get price', () => {
    const car = new Car("BMW", 500.00, "PETROL");
    const actual = car.price;
    const expected = 500.00;
    expect(actual).toBe(expected)
})

test('can create car and get engine type', () => {
    const car = new Car("BMW", 500.00, "PETROL");
    const actual = car.engineType;
    const expected = "PETROL";
    expect(actual).toBe(expected)
})

