

const Reverse = (arr) => {
  // limit specifies the amount of Reverse actions
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--)
    [arr[i], arr[j]] = [arr[j], arr[i]]

  return arr
}
export { Reverse }
