
const intToBase = (number, base) => {
  if (typeof number !== 'number' || typeof base !== 'number') {
    throw new Error('Input data must be numbers')
  }
  // Zero in any number system is zero
  if (number === 0) {
    return '0'
  }
  let absoluteValue = Math.abs(number)
  let convertedNumber = ''
  while (absoluteValue > 0) {
    // Every iteration last digit is taken away
    // and added to the previous one
    const lastDigit = absoluteValue % base
    convertedNumber = lastDigit + convertedNumber
    absoluteValue = Math.trunc(absoluteValue / base)
  }
  // Result is whether negative or positive,
  // depending on the original value
  if (number < 0) {
    convertedNumber = '-' + convertedNumber
  }
  return convertedNumber
}

export { intToBase }
