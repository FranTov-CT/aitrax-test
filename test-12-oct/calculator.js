function calculate(a, operator, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError('Los operandos deben ser números finitos.');
    }

    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b === 0) throw new RangeError('No se puede dividir entre cero.');
            result = a / b;
            break;
        default: throw new Error('Operación inválida. Usa +, -, * o /.');
    }

    if (!Number.isFinite(result)) {
        throw new RangeError('El resultado está fuera del rango permitido.');
    }
    return result;
}

if (require.main === module) {
    const args = process.argv.slice(2);
    try {
        if (args.length !== 3 || args[0].trim() === '' || args[2].trim() === '') {
            throw new Error('Uso: node test-12-oct/calculator.js <número> <operación> <número>');
        }
        console.log(calculate(Number(args[0]), args[1], Number(args[2])));
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}

module.exports = { calculate };
