function decimalToOctal(num) {
  let oct = 0
  let c = 0
  while (num > 0) {
    const r = num % 8
    oct = oct + r * Math.pow(10, c++)
    num = Math.floor(num / 8) // basically /= 8 without remainder if any
  }
  return oct
}

export { decimalToOctal }

