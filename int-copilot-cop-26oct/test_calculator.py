import contextlib
import io
import unittest
from unittest.mock import patch

from calculator import main, parse_number


class CalculatorTests(unittest.TestCase):
    def test_valid_numbers(self):
        for text, expected in [
            ("0", 0),
            ("9999999999", 9999999999),
            ("-9999999999", -9999999999),
            ("+123", 123),
            (" 42 ", 42),
            ("0000000001", 1),
        ]:
            with self.subTest(text=text):
                self.assertEqual(parse_number(text), expected)

    def test_invalid_numbers(self):
        for text in [
            "", " ", "+", "10000000000", "-10000000000",
            "00000000000", "1.5", "1e3", "abc", "1 2", "1_000",
        ]:
            with self.subTest(text=text):
                with self.assertRaises(ValueError):
                    parse_number(text)

    def test_subtraction(self):
        for first, second, expected in [
            ("8", "3", 5),
            ("3", "8", -5),
            ("0", "0", 0),
            ("-5", "-2", -3),
            ("9999999999", "-9999999999", 19999999998),
            ("-9999999999", "9999999999", -19999999998),
        ]:
            with self.subTest(first=first, second=second):
                output = io.StringIO()
                with patch("builtins.input", side_effect=[first, second]):
                    with contextlib.redirect_stdout(output):
                        self.assertEqual(main(), 0)
                self.assertIn(f"= {expected}\n", output.getvalue())

    def test_invalid_input_is_reported_and_retried(self):
        output, errors = io.StringIO(), io.StringIO()
        with patch("builtins.input", side_effect=["invalid", "10", "10000000000", "3"]):
            with contextlib.redirect_stdout(output), contextlib.redirect_stderr(errors):
                self.assertEqual(main(), 0)
        self.assertEqual(errors.getvalue().count("Error:"), 2)
        self.assertIn("= 7\n", output.getvalue())

    def test_cancellation(self):
        for error in (EOFError, KeyboardInterrupt):
            with self.subTest(error=error):
                output, errors = io.StringIO(), io.StringIO()
                with patch("builtins.input", side_effect=error):
                    with contextlib.redirect_stdout(output):
                        with contextlib.redirect_stderr(errors):
                            self.assertEqual(main(), 1)
                self.assertIn("Operacion cancelada.", errors.getvalue())
                self.assertNotIn("Resultado:", output.getvalue())


if __name__ == "__main__":
    unittest.main()
