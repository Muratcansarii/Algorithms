
function binarySearch(arr, value, floor, ceiling) {
  // Middle index
  const mid = Math.floor((floor + ceiling) / 2)

  // If value is at the mid position return this position
  if (arr[mid] === value) {
    return mid
  }

  if (floor > ceiling) return -1

  // If the middle element is great than the value
  // search the left part of the array
  if (arr[mid] > value) {
    return binarySearch(arr, value, floor, mid - 1)
    // If the middle element is lower than the value
    // search the right part of the array
  } else {
    return binarySearch(arr, value, mid + 1, ceiling)
  }
}

function exponentialSearch(arr, length, value) {
  // If value is the first element of the array return this position
  if (arr[0] === value) {
    return 0
  }

  // Find range for binary search
  let i = 1
  while (i < length && arr[i] <= value) {
    i = i * 2
  }

  // Call binary search for the range found above
  return binarySearch(arr, value, i / 2, Math.min(i, length))
}

export { binarySearch, exponentialSearch }

