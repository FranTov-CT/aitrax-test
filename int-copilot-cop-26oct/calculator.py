"""Calculadora de resta para dos enteros de hasta 10 cifras."""

import re
import sys


def parse_number(value: str) -> int:
    text = value.strip()
    if re.fullmatch(r"[+-]?[0-9]{1,10}", text) is None:
        raise ValueError("Introduce un entero de 1 a 10 cifras (signo opcional).")
    return int(text)


def read_number(prompt: str) -> int:
    while True:
        try:
            return parse_number(input(prompt))
        except ValueError as error:
            print(f"Error: {error}", file=sys.stderr)


def main() -> int:
    print("Calculadora de resta: dos enteros de hasta 10 cifras.")
    try:
        first = read_number("Primer numero: ")
        second = read_number("Segundo numero: ")
    except (EOFError, KeyboardInterrupt):
        print("\nOperacion cancelada.", file=sys.stderr)
        return 1
    print(f"Resultado: {first} - ({second}) = {first - second}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
