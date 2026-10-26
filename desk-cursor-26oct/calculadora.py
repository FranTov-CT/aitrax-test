"""Calculadora que suma exactamente 7 números de hasta 3 cifras."""

COUNT = 7
MAX_VALUE = 999


def is_valid_number(value):
    """True if value is an integer with at most 3 digits."""
    if isinstance(value, bool) or not isinstance(value, int):
        return False
    return abs(value) <= MAX_VALUE


def sumar_siete(numeros):
    """Return the sum of exactly 7 integers of at most 3 digits."""
    if len(numeros) != COUNT:
        raise ValueError(f"Se requieren exactamente {COUNT} números")
    for numero in numeros:
        if not is_valid_number(numero):
            raise ValueError(
                f"{numero} no es un entero de hasta 3 cifras "
                f"(entre -{MAX_VALUE} y {MAX_VALUE})"
            )
    return sum(numeros)


def _leer_numero(posicion):
    while True:
        raw = input(f"Número {posicion} de {COUNT}: ").strip()
        try:
            value = int(raw)
        except ValueError:
            print("Ingresa un entero válido.")
            continue
        if not is_valid_number(value):
            print(
                f"El número debe tener como máximo 3 cifras "
                f"(entre -{MAX_VALUE} y {MAX_VALUE})."
            )
            continue
        return value


def main():
    print("Suma de 7 números. Cada uno puede tener hasta 3 cifras.")
    numeros = [_leer_numero(i) for i in range(1, COUNT + 1)]
    total = sumar_siete(numeros)
    expresion = " + ".join(str(n) for n in numeros)
    print(f"{expresion} = {total}")


if __name__ == "__main__":
    main()
