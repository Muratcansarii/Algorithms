
const AlternativeStringArrange = (str1, str2) => {
  // firstly, check that both inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Not string(s)'
  }

  // output string value.
  let outStr = ''

  // get first string length.
  const firstStringLength = str1.length
  // get second string length.
  const secondStringLength = str2.length
  // absolute length for operation.
  const absLength =
    firstStringLength > secondStringLength
      ? firstStringLength
      : secondStringLength

  // Iterate the character count until the absolute count is reached.
  for (let charCount = 0; charCount < absLength; charCount++) {
    // If firstStringLength is lesser than the charCount it means they are able to re-arrange.
    if (charCount < firstStringLength) {
      outStr += str1[charCount]
    }

    // If secondStringLength is lesser than the charCount it means they are able to re-arrange.
    if (charCount < secondStringLength) {
      outStr += str2[charCount]
    }
  }

  // return the output string.
  return outStr
}

export { AlternativeStringArrange }
