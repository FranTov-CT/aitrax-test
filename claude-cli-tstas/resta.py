#!/usr/bin/env python3
"""Programa que realiza restas de numeros de 4 cifras (1000-9999)."""


def leer_numero_4_cifras(mensaje):
    while True:
        try:
            numero = int(input(mensaje))
        except ValueError:
            print("Entrada invalida. Ingresa un numero entero.")
            continue
        if 1000 <= abs(numero) <= 9999:
            return numero
        print("El numero debe tener 4 cifras (entre 1000 y 9999).")


def main():
    print("Resta de numeros de 4 cifras")
    a = leer_numero_4_cifras("Ingresa el primer numero (4 cifras): ")
    b = leer_numero_4_cifras("Ingresa el segundo numero (4 cifras): ")
    print(f"{a} - {b} = {a - b}")


if __name__ == "__main__":
    main()
