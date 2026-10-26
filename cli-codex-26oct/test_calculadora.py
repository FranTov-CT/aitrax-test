import subprocess
import sys
import unittest
from pathlib import Path

from calculadora import sumar


class CalculadoraTests(unittest.TestCase):
    def test_suma_exactamente_cinco_enteros(self):
        self.assertEqual(sumar([1, 2, 3, 4, 5]), 15)

    def test_acepta_limites_negativos_y_cero(self):
        self.assertEqual(sumar([-999, 999, 0, -12, 12]), 0)
        self.assertEqual(sumar([999] * 5), 4995)

    def test_rechaza_cantidad_distinta_de_cinco(self):
        for numeros in ([], [1] * 4, [1] * 6):
            with self.subTest(numeros=numeros), self.assertRaises(ValueError):
                sumar(numeros)

    def test_rechaza_valores_fuera_de_rango(self):
        for numero in (-1000, 1000):
            with self.subTest(numero=numero), self.assertRaises(ValueError):
                sumar([numero, 0, 0, 0, 0])

    def test_rechaza_valores_que_no_son_enteros(self):
        for numero in (1.5, "2", True, None):
            with self.subTest(numero=numero), self.assertRaises(ValueError):
                sumar([numero, 0, 0, 0, 0])

    def ejecutar(self, entrada):
        return subprocess.run(
            [sys.executable, str(Path(__file__).with_name("calculadora.py"))],
            input=entrada, capture_output=True, text=True, check=False,
        )

    def test_interfaz_reintenta_entradas_invalidas(self):
        resultado = self.ejecutar("hola\n1.5\n1000\n1\n2\n3\n4\n5\n")
        self.assertEqual(resultado.returncode, 0)
        self.assertIn("Resultado: 15", resultado.stdout)
        self.assertEqual(resultado.stdout.count("Entrada inválida"), 3)

    def test_interfaz_maneja_entrada_incompleta(self):
        resultado = self.ejecutar("1\n2\n")
        self.assertEqual(resultado.returncode, 1)
        self.assertIn("Operación cancelada", resultado.stdout)


if __name__ == "__main__":
    unittest.main()
