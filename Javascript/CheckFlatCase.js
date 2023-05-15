
const checkFlatCase = (varname) => {
  // firstly, check that input is a string or not.
  if (typeof varname !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /^[a-z]*$/
  return pat.test(varname)
}

export { checkFlatCase }
