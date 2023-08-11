
const isOdd = (number) => Boolean(number % 2) // 1 -> true, 0 -> false

const isOddBitwise = (number) => Boolean(number & 1) // 1 -> true, 0 -> false

export { isOdd, isOddBitwise }
