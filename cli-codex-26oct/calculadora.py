"""Calculadora interactiva para sumar cinco enteros de hasta tres cifras."""


def sumar(numeros):
    """Suma exactamente cinco enteros comprendidos entre -999 y 999."""
    if len(numeros) != 5:
        raise ValueError("Se necesitan exactamente cinco números.")
    if any(type(numero) is not int or not -999 <= numero <= 999 for numero in numeros):
        raise ValueError("Cada número debe ser un entero entre -999 y 999.")
    return sum(numeros)


def main():
    print("Suma de 5 números enteros de hasta 3 cifras (-999 a 999).")
    numeros = []
    while len(numeros) < 5:
        try:
            entrada = input(f"Número {len(numeros) + 1}/5: ")
            numero = int(entrada)
            if not -999 <= numero <= 999:
                raise ValueError
        except ValueError:
            print("Entrada inválida: escribe un entero entre -999 y 999.")
            continue
        except (EOFError, KeyboardInterrupt):
            print("\nOperación cancelada: faltan números por ingresar.")
            return 1
        numeros.append(numero)
    print(f"Resultado: {sumar(numeros)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
