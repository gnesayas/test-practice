const analyzeArray = require("./analyze");

test("calculate values with positive numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("calculate values with some negative numbers", () => {
  expect(analyzeArray([-5, 8, 3, 4, -4, 0])).toEqual({
    average: 1,
    min: -5,
    max: 8,
    length: 6,
  });
});

test("calculate values with empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("calculate values with single element array", () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});
