
const sum = require('./calculator')
const subtract = require('./calculator')

test('properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3)
})

test('properly subtracts two numbers', () => {
    expect(subtract(2,1)).toBe(1)
})