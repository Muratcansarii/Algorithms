

function integralEvaluation(N, a, b, func) {
  // Check if all restrictions are satisfied for the given N, a, b
  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('Expected integer N and finite a, b')
  }
  if (N <= 0) {
    throw Error('N has to be >= 2')
  } // check if N > 0
  if (a > b) {
    throw Error('a must be less or equal than b')
  } // Check if a < b
  if (a === b) return 0 // If a === b integral is zero

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0+h/2) + f(x1+h/2) + ... + f(xN-1+h/2)}
  let temp
  for (let i = 0; i < N; i++) {
    temp = func(xi + h / 2)
    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h
  temp = pointsArray.reduce((acc, currValue) => acc + currValue, 0)

  result *= temp

  if (Number.isNaN(result)) {
    throw Error(
      'Result is NaN. The input interval does not belong to the functions domain'
    )
  }

  return result
}

export { integralEvaluation }
