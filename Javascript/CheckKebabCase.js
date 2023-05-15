
const CheckKebabCase = (varName) => {
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /(\w+)-(\w)([\w-]*)/
  return pat.test(varName) && !varName.includes('_')
}

export { CheckKebabCase }
