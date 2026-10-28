const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { join } = require('node:path');
const { sumNumbers } = require('./calculator');

test('sums between one and five five-digit numbers', () => {
    const numbers = [12345, 23456, 34567, 45678, 56789];
    for (let count = 1; count <= 5; count++) {
        const operands = numbers.slice(0, count);
        assert.equal(sumNumbers(operands), operands.reduce((sum, number) => sum + number, 0));
    }
});

test('accepts inclusive limits and the maximum total', () => {
    assert.equal(sumNumbers([10000]), 10000);
    assert.equal(sumNumbers([99999]), 99999);
    assert.equal(sumNumbers([10000, 99999]), 109999);
    assert.equal(sumNumbers(Array(5).fill(99999)), 499995);
});

test('rejects empty lists and more than five numbers', () => {
    assert.throws(() => sumNumbers([]), /entre 1 y 5/);
    assert.throws(() => sumNumbers(Array(6).fill(10000)), /entre 1 y 5/);
});

test('rejects non-array input', () => {
    for (const value of [undefined, null, 12345, '12345', {}]) {
        assert.throws(() => sumNumbers(value), TypeError);
    }
});

test('rejects invalid numbers and sparse arrays', () => {
    for (const value of [9999, 100000, 0, -12345, 12345.5, NaN, Infinity, -Infinity, '12345', null, undefined, true]) {
        assert.throws(() => sumNumbers([10000, value]), /entero de cinco cifras/);
    }
    assert.throws(() => sumNumbers(Array(2)), /entero de cinco cifras/);
});

function runCalculator(args) {
    const result = spawnSync(process.execPath, [join(__dirname, 'calculator.js'), ...args], { encoding: 'utf8' });
    assert.ifError(result.error);
    return result;
}

test('CLI prints the sum for valid input', () => {
    for (const [args, total] of [
        [['10000'], 10000],
        [['12345', '23456'], 35801],
        [Array(5).fill('99999'), 499995],
    ]) {
        const result = runCalculator(args);
        assert.equal(result.status, 0);
        assert.equal(result.stdout, `Resultado: ${total}\n`);
        assert.equal(result.stderr, '');
    }
});

test('CLI reports errors without printing a result for invalid input', () => {
    for (const args of [
        [], Array(6).fill('10000'), ['9999'], ['100000'], ['-12345'],
        ['12345.5'], ['abcde'], ['1e4'], ['0xabc'], ['012345'],
        [' 12345'], ['12345 '], ['12345\n'], ['+12345'], [''],
    ]) {
        const result = runCalculator(args);
        assert.equal(result.status, 1, JSON.stringify(args));
        assert.equal(result.stdout, '');
        assert.match(result.stderr, /Error: /);
        assert.match(result.stderr, /Uso: node /);
    }
});
