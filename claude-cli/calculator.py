"""Simple calculator supporting addition, subtraction, multiplication, division and square roots."""

import math


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
    """Return the quotient of a and b. Raises ValueError on division by zero."""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def square_root(a):
    """Return the square root of a. Raises ValueError for negative input."""
    if a < 0:
        raise ValueError("Cannot take the square root of a negative number")
    return math.sqrt(a)


if __name__ == "__main__":
    print("add(2, 3) =", add(2, 3))
    print("subtract(5, 2) =", subtract(5, 2))
    print("multiply(4, 3) =", multiply(4, 3))
    print("divide(10, 2) =", divide(10, 2))
    print("square_root(16) =", square_root(16))
