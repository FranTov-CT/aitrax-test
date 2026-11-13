function sum(a, b) {
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
    return Math.pow(a, b);
}

function squareRoot(value) {
    if (value < 0) throw new Error('Square root of a negative number');
    return Math.sqrt(value);
}

function root(value, degree) {
    if (!Number.isInteger(degree)) throw new Error('Root degree must be an integer');
    if (degree === 0) throw new Error('Root degree cannot be zero');
    if (value === 0 && degree < 0) throw new Error('Zero cannot have a negative root degree');
    if (value < 0 && degree % 2 === 0) {
        throw new Error('Even root of a negative number');
    }
    return value < 0
        ? -Math.pow(-value, 1 / degree)
        : Math.pow(value, 1 / degree);
}

function absolute(value) {
    return Math.abs(value);
}

module.exports = { sum, subtract, multiply, divide, modulo, power, squareRoot, root, absolute };
