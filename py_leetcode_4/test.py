import pytest
import index


def test_one():
    assert index.res.findMedianSortedArrays([1, 3], [2]) == 2.0, "Gut test"


def test_two():
    assert index.res.findMedianSortedArrays([1, 2], [3, 4]) == 2.5, "Gut test"


def test_tree():
    assert index.res.findMedianSortedArrays(
        [1, 2, 6], [4, 6, 8]) == 5.0, "Gut test"
