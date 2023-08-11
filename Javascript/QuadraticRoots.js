
const quadraticRoots = (a, b, c) => {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c

  // Check if roots are real
  if (discriminant < 0) {
    return []
  } else if (discriminant === 0) {
    // One real root
    return [-b / (2 * a)]
  } else {
    // Two real roots
    const sqrtDiscriminant = Math.sqrt(discriminant)
    return [
      (-b + sqrtDiscriminant) / (2 * a),
      (-b - sqrtDiscriminant) / (2 * a)
    ]
  }
}

export { quadraticRoots }
