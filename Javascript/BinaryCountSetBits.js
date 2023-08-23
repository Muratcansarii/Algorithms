

function BinaryCountSetBits(a) {
  'use strict'

  // check whether input is an integer, some non-integer number like, 21.1 have non-terminating binary expansions and hence their binary expansion will contain infinite ones, thus the handling of non-integers (including strings,objects etc. as it is meaningless) has been omitted

  if (!Number.isInteger(a)) throw new TypeError('Argument not an Integer')

  let count = 0
  while (a) {
    a &= a - 1
    count++
  }

  return count
}

export { BinaryCountSetBits }
