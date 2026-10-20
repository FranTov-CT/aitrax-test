#!/usr/bin/env python3
"""Print between 20 and 30 lines of random text."""

import random

WORDS = [
    "amber",
    "bridge",
    "cedar",
    "drift",
    "ember",
    "field",
    "grove",
    "harbor",
    "ivory",
    "jasper",
    "kettle",
    "lantern",
    "meadow",
    "north",
    "orbit",
    "pebble",
    "quartz",
    "river",
    "silver",
    "timber",
    "umbra",
    "valley",
    "willow",
    "xenon",
    "yellow",
    "zephyr",
]


def random_line() -> str:
    word_count = random.randint(4, 9)
    return " ".join(random.choice(WORDS) for _ in range(word_count))


def main() -> None:
    line_count = random.randint(20, 30)
    for _ in range(line_count):
        print(random_line())


if __name__ == "__main__":
    main()
