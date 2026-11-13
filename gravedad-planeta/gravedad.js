const readline = require('node:readline');

const GRAVITATIONAL_CONSTANT = 6.67430e-11;

function calcularGravedad(masa, radio) {
    if (!Number.isFinite(masa) || masa <= 0) {
        throw new RangeError('La masa debe ser un numero finito mayor que cero');
    }
    if (!Number.isFinite(radio) || radio <= 0) {
        throw new RangeError('El radio debe ser un numero finito mayor que cero');
    }

    const gravedad = (GRAVITATIONAL_CONSTANT * masa / radio) / radio;
    if (!Number.isFinite(gravedad) || gravedad === 0) {
        throw new RangeError('El resultado esta fuera del rango numerico');
    }
    return gravedad;
}

if (require.main === module) {
    const entrada = readline.createInterface({ input: process.stdin, output: process.stdout });
    const valores = [];

    console.log('Masa del planeta (kg):');
    entrada.on('line', (linea) => {
        valores.push(linea.trim());
        if (valores.length === 1) {
            console.log('Radio del planeta (m):');
        } else {
            entrada.close();
        }
    });
    entrada.on('close', () => {
        try {
            if (valores.length < 2) {
                throw new Error('Se requieren la masa y el radio');
            }
            const gravedad = calcularGravedad(Number(valores[0]), Number(valores[1]));
            console.log(`Gravedad superficial: ${gravedad} m/s²`);
        } catch (error) {
            console.error(error.message);
            process.exitCode = 1;
        }
    });
}

module.exports = { calcularGravedad };