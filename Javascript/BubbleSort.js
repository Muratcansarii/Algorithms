
export function bubbleSort(items) {
  const length = items.length
  let noSwaps

  for (let i = length; i > 0; i--) {
    // flag for optimization
    noSwaps = true
    // Number of passes
    for (let j = 0; j < i - 1; j++) {
      // Compare the adjacent positions
      if (items[j] > items[j + 1]) {
        // Swap the numbers
        ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
  }

  return items
}


export function alternativeBubbleSort(arr) {
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }

  return arr
}
