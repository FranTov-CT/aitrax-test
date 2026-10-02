const test = require('node:test');
const assert = require('node:assert/strict');
const { calculate } = require('./calculator');

test('calculates each supported operator', () => {
    assert.equal(calculate(5, '+', 3), 8);
    assert.equal(calculate(10, '-', 4), 6);
    assert.equal(calculate(6, '*', 7), 42);
    assert.equal(calculate(15, '/', 3), 5);
    assert.equal(calculate(15, '%', 4), 3);
    assert.equal(calculate(2, '^', 3), 8);
    assert.equal(calculate(5, '^', 2), 25);
    assert.equal(calculate(16, 'sqrt'), 4);
    assert.equal(calculate(-7, 'abs'), 7);
    assert.equal(calculate(7, 'abs'), 7);
    assert.equal(calculate(0, 'abs'), 0);
});

test('rejects square root of a negative number', () => {
    assert.throws(() => calculate(-4, 'sqrt'), /Cannot take square root of a negative number/);
});

test('rejects division and modulo by zero', () => {
    assert.throws(() => calculate(1, '/', 0), /Division by zero/);
    assert.throws(() => calculate(1, '%', 0), /Modulo by zero/);
});

test('rejects negative exponent in power operation', () => {
    assert.throws(() => calculate(2, '^', -1), /Exponent cannot be negative/);
});

test('rejects unknown operators', () => {
    assert.throws(() => calculate(1, '#', 2), /Unknown operator: #/);
});

test('rejects a non-string operator', () => {
    assert.throws(() => calculate(1, null, 2), /Operator must be a string/);
});

test('rejects non-numeric operands', () => {
    assert.throws(() => calculate('5', '+', 3), /Operands must be finite numbers/);
    assert.throws(() => calculate(1, '+', undefined), /Operands must be finite numbers/);
    assert.throws(() => calculate(NaN, '*', 2), /Operands must be finite numbers/);
});

test('rejects results that overflow to Infinity', () => {
    assert.throws(() => calculate(10, '^', 400), /Result is out of range/);
    assert.throws(() => calculate(Number.MAX_VALUE, '*', 2), /Result is out of range/);
});
