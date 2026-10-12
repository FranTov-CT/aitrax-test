# Calculadora

Calculadora de suma, resta, multiplicación y división para Node.js, sin dependencias.

Desde la raíz del repositorio:

```sh
node test-12-oct/calculator.js 5 + 3
node test-12-oct/calculator.js 10 - 4
node test-12-oct/calculator.js 6 '*' 7
node test-12-oct/calculator.js 15 / 3
```

Pon `*` entre comillas para evitar que el shell lo expanda. Acepta números negativos
y decimales. Las entradas inválidas, la división entre cero y los resultados fuera
de rango muestran un error y terminan con código 1.

También puedes importar `calculate(a, operator, b)` desde `calculator.js`.
