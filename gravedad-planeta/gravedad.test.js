const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { calcularGravedad } = require('./gravedad');

test('calcula aproximadamente la gravedad superficial de la Tierra', () => {
    const gravedad = calcularGravedad(5.972e24, 6.371e6);
    assert.ok(Math.abs(gravedad - 9.82) < 0.02);
});

test('rechaza masas y radios invalidos', () => {
    for (const valor of [0, -1, NaN, Infinity, '5', undefined]) {
        assert.throws(() => calcularGravedad(valor, 1), /masa/);
        assert.throws(() => calcularGravedad(1, valor), /radio/);
    }
});

test('rechaza resultados fuera del rango numerico', () => {
    assert.throws(() => calcularGravedad(Number.MAX_VALUE, Number.MIN_VALUE), /rango/);
    assert.throws(() => calcularGravedad(Number.MIN_VALUE, Number.MAX_VALUE), /rango/);
});

test('la CLI calcula la gravedad con entradas por consola', () => {
    const resultado = spawnSync(process.execPath, [require.resolve('./gravedad')], {
        input: '5.972e24\n6.371e6\n', encoding: 'utf8'
    });
    assert.equal(resultado.status, 0);
    assert.match(resultado.stdout, /Gravedad superficial: 9\.8.* m\/s²/);
});

test('la CLI informa errores para entradas invalidas o incompletas', () => {
    for (const entrada of ['abc\n1\n', '1\n0\n', '1\n']) {
        const resultado = spawnSync(process.execPath, [require.resolve('./gravedad')], {
            input: entrada, encoding: 'utf8'
        });
        assert.equal(resultado.status, 1);
        assert.notEqual(resultado.stderr.trim(), '');
    }
});