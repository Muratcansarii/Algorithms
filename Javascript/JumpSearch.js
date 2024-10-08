
const jumpSearch = (arr, value) => {
  const length = arr.length
  let step = Math.floor(Math.sqrt(length))
  let lowerBound = 0
  while (arr[Math.min(step, length) - 1] < value) {
    lowerBound = step
    step += step
    if (lowerBound >= length) {
      return -1
    }
  }

  const upperBound = Math.min(step, length)
  while (arr[lowerBound] < value) {
    lowerBound++
    if (lowerBound === upperBound) {
      return -1
    }
  }
  if (arr[lowerBound] === value) {
    return lowerBound
  }
  return -1
}

export { jumpSearch }
