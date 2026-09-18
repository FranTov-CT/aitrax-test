const operations = require('./operations');

function calculate(a, operator, b) {
    switch (operator) {
        case '+': return operations.add(a, b);
        case '-': return operations.subtract(a, b);
        case '*': return operations.multiply(a, b);
        case '/': return operations.divide(a, b);
        case 'sqrt': return operations.squareRoot(a);
        default: throw new Error(`Unknown operator: ${operator}`);
    }
}

module.exports = { calculate };