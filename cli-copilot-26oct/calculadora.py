MAX_DIGITOS = 8


def leer_numero(prompt):
    while True:
        texto = input(prompt).strip()
        if texto.isdigit() and len(texto) <= MAX_DIGITOS:
            return int(texto)
        print(f"Entrada inválida: ingresa un entero positivo de hasta {MAX_DIGITOS} cifras.")


def sumar(a, b):
    return a + b


def main():
    a = leer_numero("Primer número: ")
    b = leer_numero("Segundo número: ")
    print(f"Resultado: {a} + {b} = {sumar(a, b)}")


if __name__ == "__main__":
    main()
