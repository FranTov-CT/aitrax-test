function sumNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError('Se requiere una lista de numeros.');
    }
    if (numbers.length < 1 || numbers.length > 5) {
        throw new RangeError('Se requieren entre 1 y 5 numeros.');
    }

    let total = 0;
    for (const number of numbers) {
        if (!Number.isInteger(number) || number < 10000 || number > 99999) {
            throw new RangeError('Cada numero debe ser un entero de cinco cifras (10000 a 99999).');
        }
        total += number;
    }
    return total;
}

if (require.main === module) {
    const args = process.argv.slice(2);
    try {
        if (args.some(argument => argument.length !== 5 || !/^[1-9][0-9]{4}$/.test(argument))) {
            throw new RangeError('Cada argumento debe contener exactamente cinco cifras (10000 a 99999).');
        }
        console.log(`Resultado: ${sumNumbers(args.map(Number))}`);
    } catch (error) {
        if (!(error instanceof RangeError)) {
            throw error;
        }
        console.error(`Error: ${error.message}`);
        console.error('Uso: node prod-test-vs-cop-copmod/calculator.js 12345 23456 [34567 45678 56789]');
        process.exitCode = 1;
    }
}

module.exports = { sumNumbers };
