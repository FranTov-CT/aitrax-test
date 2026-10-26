"""Calculadora de suma para dos enteros de hasta cinco cifras."""


def parse_number(text):
    value = text.strip()
    digits = value[1:] if value.startswith(("+", "-")) else value
    if not digits or len(digits) > 5 or not digits.isascii() or not digits.isdecimal():
        raise ValueError("Introduce un entero de hasta 5 cifras (de -99999 a 99999).")
    return int(value)


def add(first, second):
    for number in (first, second):
        if type(number) is not int or not -99999 <= number <= 99999:
            raise ValueError("Cada numero debe ser un entero de hasta 5 cifras.")
    return first + second


def read_number(prompt):
    while True:
        try:
            return parse_number(input(prompt))
        except ValueError as error:
            print(error)


def main():
    try:
        first = read_number("Primer numero: ")
        second = read_number("Segundo numero: ")
    except (EOFError, KeyboardInterrupt):
        print("\nOperacion cancelada.")
        return
    print(f"Resultado: {add(first, second)}")


if __name__ == "__main__":
    main()