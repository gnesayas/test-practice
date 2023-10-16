function analyzeArray(array) {
  if (array.length === 0) {
    return { average: undefined, min: undefined, max: undefined, length: 0 };
  }
  return {
    average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
    min: array.reduce((prev, curr) => (prev < curr ? prev : curr), Infinity),
    max: array.reduce((prev, curr) => (prev > curr ? prev : curr), -Infinity),
    length: array.length,
  };
}

module.exports = analyzeArray;
