import unittest
from unittest.mock import patch

from calculator import add, main, parse_number


class CalculatorTests(unittest.TestCase):
    def test_addition(self):
        for first, second, expected in (
            (2, 3, 5),
            (0, 0, 0),
            (99999, 99999, 199998),
            (-99999, -99999, -199998),
            (-99999, 99999, 0),
        ):
            with self.subTest(first=first, second=second):
                self.assertEqual(add(first, second), expected)

    def test_parse_valid_numbers(self):
        for text, expected in (("0", 0), ("99999", 99999), ("-99999", -99999),
                               (" +12345 ", 12345), ("00001", 1)):
            with self.subTest(text=text):
                self.assertEqual(parse_number(text), expected)

    def test_parse_invalid_numbers(self):
        for text in ("", " ", "+", "-", "100000", "-100000", "000001",
                     "1.5", "1e3", "abc", "12 34", "--1"):
            with self.subTest(text=text):
                with self.assertRaises(ValueError):
                    parse_number(text)

    def test_add_rejects_invalid_operands(self):
        for number in (100000, -100000, 1.5, True, "12", None):
            for operands in ((number, 1), (1, number)):
                with self.subTest(operands=operands):
                    with self.assertRaises(ValueError):
                        add(*operands)

    def test_console_retries_invalid_input(self):
        with patch("builtins.input", side_effect=["100000", "abc", "99999", "1"]):
            with patch("builtins.print") as output:
                main()
        output.assert_called_with("Resultado: 100000")

    def test_console_handles_end_of_input(self):
        with patch("builtins.input", side_effect=EOFError):
            with patch("builtins.print") as output:
                main()
        output.assert_called_with("\nOperacion cancelada.")


if __name__ == "__main__":
    unittest.main()