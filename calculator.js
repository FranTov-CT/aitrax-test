const operations = require('./operations');

function calculate(a, operator, b) {
    if (typeof operator !== 'string') {
        throw new TypeError('Operator must be a string');
    }

    const requiresSingleOperand = operator === 'sqrt';
    if (!Number.isFinite(a) || (!requiresSingleOperand && !Number.isFinite(b))) {
        throw new TypeError('Operands must be finite numbers');
    }
    let result;
    switch (operator) {
        case '+': result = operations.add(a, b); break;
        case '-': result = operations.subtract(a, b); break;
        case '*': result = operations.multiply(a, b); break;
        case '/': result = operations.divide(a, b); break;
        case '%': result = operations.modulo(a, b); break;
        case '^': result = operations.power(a, b); break;
        case 'sqrt': result = operations.sqrt(a); break;
        default: throw new Error(`Unknown operator: ${operator}`);
    }
    if (!Number.isFinite(result)) {
        throw new RangeError('Result is out of range');
    }
    return result;
}

if (require.main === module) {
    console.log('Calculator ready');
    console.log('5 + 3 =', calculate(5, '+', 3));
    console.log('10 - 4 =', calculate(10, '-', 4));
    console.log('6 * 7 =', calculate(6, '*', 7));
    console.log('15 / 3 =', calculate(15, '/', 3));
    console.log('15 % 4 =', calculate(15, '%', 4));
    console.log('2 ^ 3 =', calculate(2, '^', 3));
    console.log('sqrt(16) =', calculate(16, 'sqrt'));
}

module.exports = { calculate };
