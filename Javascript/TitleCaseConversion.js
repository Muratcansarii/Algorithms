
const titleCaseConversion = (inputString) => {
  if (inputString === '') return ''
  // Extract all space separated string.
  const stringCollections = inputString.split(' ').map((word) => {
    let firstChar = ''
    // Get the [ASCII](https://en.wikipedia.org/wiki/ASCII) character code by the use charCodeAt method.
    const firstCharCode = word[0].charCodeAt()
    // If the ASCII character code lies between 97 to 122 it means they are in the lowercase so convert it.
    if (firstCharCode >= 97 && firstCharCode <= 122) {
      // Convert the case by use of the above explanation.
      firstChar += String.fromCharCode(firstCharCode - 32)
    } else {
      // Else store the characters without any modification.
      firstChar += word[0]
    }
    const newWordChar = word
      .slice(1)
      .split('')
      .map((char) => {
        // Get the ASCII character code by the use charCodeAt method.
        const presentCharCode = char.charCodeAt()
        // If the ASCII character code lies between 65 to 90, it means they are in the uppercase so convert it.
        if (presentCharCode >= 65 && presentCharCode <= 90) {
          // Convert the case by use of the above explanation.
          return String.fromCharCode(presentCharCode + 32)
        }
        // Else return the characters without any modification.
        return char
      })
    // Return the first converted character and remaining character string.
    return firstChar + newWordChar.join('')
  })
  // Convert all words in a string and return it.
  return stringCollections.join(' ')
}

export { titleCaseConversion }
