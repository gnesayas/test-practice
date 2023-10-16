const calculator = require('./calculator');

test("calculator adds two numbers correctly", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("calculator adds with a negative correctly", () => {
    expect(calculator.add(-2, 2)).toBe(0);
});

test("calculator subtracts two numbers correctly", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test("calculator subtracts with a negative correctly", () => {
    expect(calculator.subtract(2, -2)).toBe(4);
});

test("calculator divides two numbers correctly", () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test("calculator divides with a negative correctly", () => {
    expect(calculator.divide(2, -2)).toBe(-1);
});

test("calculator throws an error when dividing by 0", () => {
    expect(() => calculator.divide(2, 0)).toThrow();
});

test("calculator multiplies two numbers correctly", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("calculator multiplies with a negative correctly", () => {
    expect(calculator.multiply(2, -2)).toBe(-4);
});