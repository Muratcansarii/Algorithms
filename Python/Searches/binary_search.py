#!/usr/bin/env python3


from __future__ import annotations

import bisect


def bisect_left(
    sorted_collection: list[int], item: int, lo: int = 0, hi: int = -1
) -> int:
  
    if hi < 0:
        hi = len(sorted_collection)

    while lo < hi:
        mid = lo + (hi - lo) // 2
        if sorted_collection[mid] < item:
            lo = mid + 1
        else:
            hi = mid

    return lo


def bisect_right(
    sorted_collection: list[int], item: int, lo: int = 0, hi: int = -1
) -> int:
   
    if hi < 0:
        hi = len(sorted_collection)

    while lo < hi:
        mid = lo + (hi - lo) // 2
        if sorted_collection[mid] <= item:
            lo = mid + 1
        else:
            hi = mid

    return lo


def insort_left(
    sorted_collection: list[int], item: int, lo: int = 0, hi: int = -1
) -> None:
   
    sorted_collection.insert(bisect_right(sorted_collection, item, lo, hi), item)


def binary_search(sorted_collection: list[int], item: int) -> int:
    """Pure implementation of a binary search algorithm in Python

    Be careful collection must be ascending sorted otherwise, the result will be
    unpredictable

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of the found item or -1 if the item is not found

    Examples:
    >>> binary_search([0, 5, 7, 10, 15], 0)
    0
    >>> binary_search([0, 5, 7, 10, 15], 15)
    4
    >>> binary_search([0, 5, 7, 10, 15], 5)
    1
    >>> binary_search([0, 5, 7, 10, 15], 6)
    -1
    """
    if list(sorted_collection) != sorted(sorted_collection):
        raise ValueError("sorted_collection must be sorted in ascending order")
    left = 0
    right = len(sorted_collection) - 1

    while left <= right:
        midpoint = left + (right - left) // 2
        current_item = sorted_collection[midpoint]
        if current_item == item:
            return midpoint
        elif item < current_item:
            right = midpoint - 1
        else:
            left = midpoint + 1
    return -1


def binary_search_std_lib(sorted_collection: list[int], item: int) -> int:
    """Pure implementation of a binary search algorithm in Python using stdlib

    Be careful collection must be ascending sorted otherwise, the result will be
    unpredictable

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of the found item or -1 if the item is not found

    Examples:
    >>> binary_search_std_lib([0, 5, 7, 10, 15], 0)
    0
    >>> binary_search_std_lib([0, 5, 7, 10, 15], 15)
    4
    >>> binary_search_std_lib([0, 5, 7, 10, 15], 5)
    1
    >>> binary_search_std_lib([0, 5, 7, 10, 15], 6)
    -1
    """
    if list(sorted_collection) != sorted(sorted_collection):
        raise ValueError("sorted_collection must be sorted in ascending order")
    index = bisect.bisect_left(sorted_collection, item)
    if index != len(sorted_collection) and sorted_collection[index] == item:
        return index
    return -1


def binary_search_by_recursion(
    sorted_collection: list[int], item: int, left: int = 0, right: int = -1
) -> int:
    """Pure implementation of a binary search algorithm in Python by recursion

    Be careful collection must be ascending sorted otherwise, the result will be
    unpredictable
    First recursion should be started with left=0 and right=(len(sorted_collection)-1)

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of the found item or -1 if the item is not found

    Examples:
    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 0, 0, 4)
    0
    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 15, 0, 4)
    4
    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 5, 0, 4)
    1
    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 6, 0, 4)
    -1
    """
    if right < 0:
        right = len(sorted_collection) - 1
    if list(sorted_collection) != sorted(sorted_collection):
        raise ValueError("sorted_collection must be sorted in ascending order")
    if right < left:
        return -1

    midpoint = left + (right - left) // 2

    if sorted_collection[midpoint] == item:
        return midpoint
    elif sorted_collection[midpoint] > item:
        return binary_search_by_recursion(sorted_collection, item, left, midpoint - 1)
    else:
        return binary_search_by_recursion(sorted_collection, item, midpoint + 1, right)


def exponential_search(sorted_collection: list[int], item: int) -> int:
    """Pure implementation of an exponential search algorithm in Python
    Resources used:
    https://en.wikipedia.org/wiki/Exponential_search

    Be careful collection must be ascending sorted otherwise, result will be
    unpredictable

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of the found item or -1 if the item is not found

    the order of this algorithm is O(lg I) where I is index position of item if exist

    Examples:
    >>> exponential_search([0, 5, 7, 10, 15], 0)
    0
    >>> exponential_search([0, 5, 7, 10, 15], 15)
    4
    >>> exponential_search([0, 5, 7, 10, 15], 5)
    1
    >>> exponential_search([0, 5, 7, 10, 15], 6)
    -1
    """
    if list(sorted_collection) != sorted(sorted_collection):
        raise ValueError("sorted_collection must be sorted in ascending order")
    bound = 1
    while bound < len(sorted_collection) and sorted_collection[bound] < item:
        bound *= 2
    left = bound // 2
    right = min(bound, len(sorted_collection) - 1)
    last_result = binary_search_by_recursion(
        sorted_collection=sorted_collection, item=item, left=left, right=right
    )
    if last_result is None:
        return -1
    return last_result


searches = (  # Fastest to slowest...
    binary_search_std_lib,
    binary_search,
    exponential_search,
    binary_search_by_recursion,
)


if __name__ == "__main__":
    import doctest
    import timeit

    doctest.testmod()
    for search in searches:
        name = f"{search.__name__:>26}"
        print(f"{name}: {search([0, 5, 7, 10, 15], 10) = }")  # type: ignore[operator]

    print("\nBenchmarks...")
    setup = "collection = range(1000)"
    for search in searches:
        name = search.__name__
        print(
            f"{name:>26}:",
            timeit.timeit(
                f"{name}(collection, 500)", setup=setup, number=5_000, globals=globals()
            ),
        )

    user_input = input("\nEnter numbers separated by comma: ").strip()
    collection = sorted(int(item) for item in user_input.split(","))
    target = int(input("Enter a single number to be found in the list: "))
    result = binary_search(sorted_collection=collection, item=target)
    if result == -1:
        print(f"{target} was not found in {collection}.")
    else:
        print(f"{target} was found at position {result} of {collection}.")
