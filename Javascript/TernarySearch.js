
function ternarySearchRecursive(arr, key, low = 0, high = arr.length - 1) {
  if (high >= low) {
    // find the mid1 and mid2
    const mid1 = Math.floor(low + (high - low) / 3)
    const mid2 = Math.floor(high - (high - low) / 3)

    // check if key is found at any mid
    if (arr[mid1] === key) {
      // return index of key if found
      return mid1
    }
    if (arr[mid2] === key) {
      // return index of key if found
      return mid2
    }

    if (key < arr[mid1]) {
      // the key lies in between low and mid1
      return ternarySearchRecursive(arr, key, low, mid1 - 1)
    } else if (key > arr[mid2]) {
      // the key lies in between mid2 and high
      return ternarySearchRecursive(arr, key, mid2 + 1, high)
    } else {
      // the key lies in between mid1 and mid2
      return ternarySearchRecursive(arr, key, mid1 + 1, mid2 - 1)
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1
  }
}

function ternarySearchIterative(arr, key, low = 0, high = arr.length - 1) {
  while (high >= low) {
    // find the mid1 and mid2
    const mid1 = Math.floor(low + (high - low) / 3)
    const mid2 = Math.floor(high - (high - low) / 3)

    // check if key is found at any mid
    if (arr[mid1] === key) {
      // return index of key if found
      return mid1
    }
    if (arr[mid2] === key) {
      // return index of key if found
      return mid2
    }


    if (key < arr[mid1]) {
      // the key lies in between low and mid1
      high = mid1 - 1
    } else if (key > arr[mid2]) {
      // the key lies in between mid2 and high
      low = mid2 + 1
    } else {
      // the key lies in between mid1 and mid2
      low = mid1 + 1
      high = mid2 - 1
    }
  }
  // the key was not found
  return -1
}

export { ternarySearchRecursive, ternarySearchIterative }
