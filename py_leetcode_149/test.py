import index


def test_one():
    assert index.res.maxPoints(
        [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]) == 4, "Gut test"


def test_two():
    assert index.res.maxPoints([[1, 1], [2, 2], [3, 3]]) == 3, "Gut test"
