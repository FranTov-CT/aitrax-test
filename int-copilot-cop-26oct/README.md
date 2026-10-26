# Calculadora de resta

Ejecutar con Python 3, sin dependencias externas:

```sh
python3 int-copilot-cop-26oct/calculator.py
```

Solicita dos enteros y muestra el primero menos el segundo. Cada entrada
admite de 1 a 10 cifras, con signo opcional (`+` o `-`); el signo no cuenta
como cifra. Los ceros iniciales cuentan para el limite. No admite decimales.
El resultado puede superar las 10 cifras.

Las entradas invalidas muestran un error y se vuelven a solicitar.
Ctrl+C o fin de entrada cancela la operacion con codigo de salida 1.

Ejecutar las pruebas desde la raiz del repositorio:

```sh
python3 -B -m unittest discover -s int-copilot-cop-26oct -v
```
