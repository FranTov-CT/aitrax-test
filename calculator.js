const operations = require('./operations');

function calculate(a, operator, b) {
    switch (operator) {
        case '+': return operations.add(a, b);
        case '-': return operations.subtract(a, b);
        case '*': return operations.multiply(a, b);
        case '/': return operations.divide(a, b);
        default: throw new Error(`Unknown operator: ${operator}`);
    }
}

console.log('Calculator ready');
console.log('5 + 3 =', calculate(5, '+', 3));
console.log('10 - 4 =', calculate(10, '-', 4));
console.log('6 * 7 =', calculate(6, '*', 7));
console.log('15 / 3 =', calculate(15, '/', 3));

module.exports = { calculate };

//Comment to track 

//Comment to track 

//Comment to track 

//Comment to track 