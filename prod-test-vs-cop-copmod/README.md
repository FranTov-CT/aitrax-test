# Calculadora de sumas

Suma entre 1 y 5 numeros enteros positivos de exactamente cinco cifras
(de 10000 a 99999, ambos incluidos). El total maximo es 499995.
No acepta decimales, signos, ceros iniciales ni notacion exponencial.

Requiere Node.js 18 o posterior, sin dependencias externas.

## Uso desde la raiz del repositorio

```sh
node prod-test-vs-cop-copmod/calculator.js 12345 23456
# Resultado: 35801
```

Los errores se muestran en stderr junto con la ayuda de uso y terminan
con codigo de salida 1.

## Uso como modulo

```js
const { sumNumbers } = require('./prod-test-vs-cop-copmod/calculator');

console.log(sumNumbers([12345, 23456])); // 35801
```

`sumNumbers` requiere un array de numeros y lanza un error si la entrada
no cumple los limites.

## Pruebas

```sh
node --test prod-test-vs-cop-copmod/calculator.test.js
```
