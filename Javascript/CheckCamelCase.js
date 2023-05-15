
const checkCamelCase = (varName) => {
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /^[a-z][A-Za-z]*$/
  return pat.test(varName)
}

export { checkCamelCase }
