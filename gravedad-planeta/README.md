# Gravedad de un planeta

Ejecuta `node gravedad-planeta/gravedad.js` e introduce la masa en kilogramos y el radio en metros. Se acepta notacion cientifica, por ejemplo `5.972e24` y `6.371e6` para la Tierra.

El programa calcula la aceleracion gravitatoria superficial en m/s² mediante `g = G * masa / radio²`, con `G = 6.67430e-11 m³/(kg s²)`. La masa por si sola no permite determinar la gravedad superficial.

Ejecuta las pruebas con `node --test gravedad-planeta/gravedad.test.js`.