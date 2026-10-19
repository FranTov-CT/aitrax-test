// Calculadora básica — operaciones aritméticas simples.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  console.log('2 + 3 =', add(2, 3));
  console.log('5 - 2 =', subtract(5, 2));
  console.log('4 * 3 =', multiply(4, 3));
  console.log('10 / 2 =', divide(10, 2));
}
