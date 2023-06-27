
export function flipArray(array, startIndex, endIndex) {
  while (startIndex < endIndex) {
    // swap front and back of the subarray
    const temp = array[startIndex]
    array[startIndex] = array[endIndex]
    array[endIndex] = temp

    // essentially reducing the problem to a smaller subarray
    startIndex++
    endIndex--
  }

  return array
}


export function findMax(array, startIndex, endIndex) {
  let maxIndex = 0
  for (let i = startIndex; i <= endIndex; i++) {
    if (array[i] > array[maxIndex]) maxIndex = i
  }

  return maxIndex
}


export function pancakeSort(array) {
  for (let subarraySize = array.length; subarraySize > 1; subarraySize--) {
    const maximumIndex = findMax(array, 0, subarraySize - 1)

    if (maximumIndex !== subarraySize - 1) {
      flipArray(array, 0, maximumIndex)
      flipArray(array, 0, subarraySize - 1)
    }
  }

  return array
}
