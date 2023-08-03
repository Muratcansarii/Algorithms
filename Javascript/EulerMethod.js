
export function eulerStep(xCurrent, stepSize, yCurrent, differentialEquation) {
  // calculates the next y-value based on the current value of x, y and the stepSize
  return yCurrent + stepSize * differentialEquation(xCurrent, yCurrent)
}

export function eulerFull(
  xStart,
  xEnd,
  stepSize,
  yStart,
  differentialEquation
) {
  // loops through all the steps until xEnd is reached, adds a point for each step and then returns all the points
  const points = [{ x: xStart, y: yStart }]
  let yCurrent = yStart
  let xCurrent = xStart

  while (xCurrent < xEnd) {
    // Euler method for next step
    yCurrent = eulerStep(xCurrent, stepSize, yCurrent, differentialEquation)
    xCurrent += stepSize
    points.push({ x: xCurrent, y: yCurrent })
  }

  return points
}
