import pytest
import index


def test_one():
    assert index.result.reverse(123) == 321, "Gut test"


def test_two():
    assert index.result.reverse(-123) == -321, "Gut test"


def test_tree():
    assert index.result.reverse(120) == 21, "Gut test"
