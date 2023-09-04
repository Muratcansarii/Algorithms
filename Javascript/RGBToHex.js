function RGBToHex(r, g, b) {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('argument is not a Number')
  }

  const toHex = (n) => (n || '0').toString(16).padStart(2, '0')

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export { RGBToHex }

