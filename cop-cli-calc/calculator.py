"""Simple calculator supporting addition, subtraction, multiplication and division."""


def add(a, b):
    """Return the sum of a and b."""
    return a + b


def subtract(a, b):
    """Return the difference of a and b."""
    return a - b


def multiply(a, b):
    """Return the product of a and b."""
    return a * b


def divide(a, b):
    """Return the quotient of a and b. Raises ZeroDivisionError if b is 0."""
    if b == 0:
        raise ZeroDivisionError("No se puede dividir entre cero.")
    return a / b


OPERATIONS = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}


def main():
    print("Calculadora simple (suma, resta, multiplicacion y division)")
    print("Operaciones disponibles: + , - , * , /")
    print("Escribe 'salir' para terminar.\n")

    while True:
        expr = input("Ingresa una operacion (ej: 3 + 4): ").strip()
        if expr.lower() in ("salir", "exit", "q"):
            print("Adios!")
            break

        parts = expr.split()
        if len(parts) != 3 or parts[1] not in OPERATIONS:
            print("Formato invalido. Usa: numero operador numero (ej: 5 * 2)\n")
            continue

        try:
            a = float(parts[0])
            b = float(parts[2])
        except ValueError:
            print("Los operandos deben ser numeros.\n")
            continue

        operator = parts[1]
        try:
            result = OPERATIONS[operator](a, b)
        except ZeroDivisionError as e:
            print(f"Error: {e}\n")
            continue

        print(f"Resultado: {result}\n")


if __name__ == "__main__":
    main()
