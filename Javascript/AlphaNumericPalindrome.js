
const alphaNumericPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  // removing all the special characters and turning everything to lowercase
  const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase()
  const midIndex = newStr.length >> 1 // x >> y = floor(x / 2^y)

  for (let i = 0; i < midIndex; i++) {
    if (newStr.at(i) !== newStr.at(~i)) {
      // ~n = -(n + 1)
      return false
    }
  }

  return true
}

export default alphaNumericPalindrome
