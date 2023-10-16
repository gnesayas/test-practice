const calculator = (function () {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    if (b === 0) {
        throw new Error("You can't divide by zero!");
    }
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return { add, subtract, divide, multiply };
})();

module.exports = calculator;
