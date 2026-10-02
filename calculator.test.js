const test = require('node:test');
const assert = require('node:assert/strict');
const { calculate } = require('./calculator');

test('calculates each supported operator', () => {
    assert.equal(calculate(5, '+', 3), 8);
    assert.equal(calculate(10, '-', 4), 6);
    assert.equal(calculate(6, '*', 7), 42);
    assert.equal(calculate(15, '/', 3), 5);
    assert.equal(calculate(15, '%', 4), 3);
});

test('rejects division and modulo by zero', () => {
    assert.throws(() => calculate(1, '/', 0), /Division by zero/);
    assert.throws(() => calculate(1, '%', 0), /Modulo by zero/);
});

test('rejects unknown operators', () => {
    assert.throws(() => calculate(1, '^', 2), /Unknown operator: \^/);
});

test('rejects non-numeric operands', () => {
    assert.throws(() => calculate('5', '+', 3), /Operands must be finite numbers/);
    assert.throws(() => calculate(1, '+', undefined), /Operands must be finite numbers/);
    assert.throws(() => calculate(NaN, '*', 2), /Operands must be finite numbers/);
});
