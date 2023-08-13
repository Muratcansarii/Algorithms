
const isTriangular = (number) => {
  for (let i = 0; i <= number; i++) {
    if ((i * (i + 1)) / 2 === number) {
      return true
    } else if ((i * (i + 1)) / 2 > number) {
      return false
    }
  }
  return false
}

/**
 *
 * @param {*} number
 * @returns
 */
const isTetrahedral = (number) => {
  for (let i = 1; i <= number; i++) {
    if ((i * (i + 1) * (i + 2)) / 6 === number) {
      return true
    } else if ((i * (i + 1) * (i + 2)) / 6 > number) {
      return false
    }
  }
  return false
}
/**
 *
 * @param {*} number
 * @returns
 */
const isPentatope = (number) => {
  for (let i = 1; i <= number; i++) {
    if ((i * (i + 1) * (i + 2) * (i + 3)) / 24 === number) {
      return true
    } else if ((i * (i + 1) * (i + 2) * (i + 3)) / 24 > number) {
      return false
    }
  }
  return false
}

/**
 *
 * @param {*} number
 * @returns
 */
const checkAll = (number) => {
  return {
    isTriangular: isTriangular(number),
    isTetrahedral: isTetrahedral(number),
    isPentatope: isPentatope(number)
  }
}
export { isTriangular }
export { isTetrahedral }
export { isPentatope }
export { checkAll }
