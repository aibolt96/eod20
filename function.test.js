let functions = require('./functions')

test('function returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('function should return string with greeting plus name', () => {
    expect(functions.greeting('James')).toEqual('Hello, James.')
})

describe('Math functions', () => {
    test('function should return sum of num1 and num2', () => {
        expect(functions.add(1,2)).toBe(3)
        expect(functions.add(4,5)).toBe(9)
    })
    
    test('function should return num1 times num2', () => {
        expect(functions.multiply(2,4)).toBe(8)
        expect(functions.multiply(1,5)).toBe(5)
    })
    
    test('function should return num1 divided by num2', () => {
        expect(functions.divide(8,2)).toBe(4)
        expect(functions.divide(9,3)).toBe(3)
    })
    
    test('function should return num1 subtract num2', () => {
        expect(functions.subtract(9,4)).toBe(5)
        expect(functions.subtract(5,5)).toBe(0)
    })  
})
