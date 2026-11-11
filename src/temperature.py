"""Temperature conversion helpers."""


def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert a temperature from Celsius to Fahrenheit.

    Args:
        celsius: Temperature in degrees Celsius.

    Returns:
        The equivalent temperature in degrees Fahrenheit.
    """
    return (celsius * 9 / 5) + 32


def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert a temperature from Fahrenheit to Celsius.

    Args:
        fahrenheit: Temperature in degrees Fahrenheit.

    Returns:
        The equivalent temperature in degrees Celsius.
    """
    return (fahrenheit - 32) * 5 / 9


def celsius_to_kelvin(celsius: float) -> float:
    """Convert a temperature from Celsius to Kelvin.

    Args:
        celsius: Temperature in degrees Celsius.

    Returns:
        The equivalent temperature in Kelvin.
    """
    return celsius + 273.15


if __name__ == "__main__":
    sample_values = [0.0, 25.0, 100.0, -40.0]

    for value in sample_values:
        fahr = celsius_to_fahrenheit(value)
        kelvin = celsius_to_kelvin(value)
        print(f"{value}°C = {fahr:.2f}°F")
        print(f"{value}°C = {kelvin:.2f}K")

    print(f"32°F = {fahrenheit_to_celsius(32.0):.2f}°C")
    print(f"212°F = {fahrenheit_to_celsius(212.0):.2f}°C")

