
const percentageOfLetter = (str, letter) => {
  if (typeof str !== 'string' || typeof letter !== 'string') {
    throw new Error('Input data must be strings')
  }
  let letterCount = 0
  // Iterate through the whole given text
  for (let i = 0; i < str.length; i++) {
    // Count how often the letter appears in the word
    letterCount += str[i].toLowerCase() === letter.toLowerCase() ? 1 : 0
  }
  const percentage = Math.floor((100 * letterCount) / str.length)
  return percentage
}

export { percentageOfLetter }
