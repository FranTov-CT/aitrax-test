"""Simple calculator supporting addition and subtraction."""


def add(a, b):
    """Return the sum of a and b."""
    return a + b


def subtract(a, b):
    """Return the difference of a and b."""
    return a - b


def main():
    print("Calculadora simple (suma y resta)")
    print("Operaciones disponibles: + , -")
    print("Escribe 'salir' para terminar.\n")

    while True:
        expr = input("Ingresa una operacion (ej: 3 + 4): ").strip()
        if expr.lower() in ("salir", "exit", "q"):
            print("Adios!")
            break

        parts = expr.split()
        if len(parts) != 3 or parts[1] not in ("+", "-"):
            print("Formato invalido. Usa: numero operador numero (ej: 5 - 2)\n")
            continue

        try:
            a = float(parts[0])
            b = float(parts[2])
        except ValueError:
            print("Los operandos deben ser numeros.\n")
            continue

        operator = parts[1]
        if operator == "+":
            result = add(a, b)
        else:
            result = subtract(a, b)

        print(f"Resultado: {result}\n")


if __name__ == "__main__":
    main()
