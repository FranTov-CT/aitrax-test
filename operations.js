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

function modulo(a, b) {
    if (b === 0) throw new Error('Modulo by zero');
    return a % b;
}

function power(a, b) {
    if (b < 0) throw new Error('Exponent cannot be negative');
    return Math.pow(a, b);
}

function sqrt(a) {
    if (a < 0) throw new Error('Cannot take square root of a negative number');
    return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };