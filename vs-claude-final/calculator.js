const operations = require('./operations');

function calculate(a, operator, b) {
    switch (operator) {
        case '+': return operations.sum(a, b);
        case '-': return operations.subtract(a, b);
        case '*': return operations.multiply(a, b);
        case '/': return operations.divide(a, b);
        case '%': return operations.modulo(a, b);
        case '^':
        case '**': return operations.power(a, b);
        case 'sqrt':
        case '√': return operations.squareRoot(a);
        case 'root': return operations.root(a, b);
        case 'abs': return operations.absolute(a);
        default: throw new Error(`Unknown operator: ${operator}`);
    }
}

if (require.main === module) {
    console.log('Calculator ready');
    console.log('5 + 3 =', calculate(5, '+', 3));
    console.log('10 - 4 =', calculate(10, '-', 4));
    console.log('6 * 7 =', calculate(6, '*', 7));
    console.log('15 / 3 =', calculate(15, '/', 3));
    console.log('10 % 3 =', calculate(10, '%', 3));
    console.log('2 ^ 8 =', calculate(2, '^', 8));
    console.log('sqrt(16) =', calculate(16, 'sqrt'));
    console.log('cuberoot(-27) =', calculate(-27, 'root', 3));
}

module.exports = { calculate };
