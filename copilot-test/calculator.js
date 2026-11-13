function calculate(a, operator, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case 'sqrt': return Math.sqrt(a);
        default: throw new Error(`Unknown operator: ${operator}`);
    }
}

module.exports = { calculate };