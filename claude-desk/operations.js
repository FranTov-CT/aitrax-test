function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

function squareRoot(value) {
    if (value < 0) throw new Error('Square root of a negative number');
    return Math.sqrt(value);
}

module.exports = { add, subtract, multiply, divide, squareRoot };
