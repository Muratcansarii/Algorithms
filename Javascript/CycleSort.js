
function cycleSort(list) {
  for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
    let value = list[cycleStart]
    let position = cycleStart

    // search position
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < value) {
        position++
      }
    }
    // if it is the same, continue
    if (position === cycleStart) {
      continue
    }
    while (value === list[position]) {
      position++
    }

    const oldValue = list[position]
    list[position] = value
    value = oldValue

    // rotate the rest
    while (position !== cycleStart) {
      position = cycleStart
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < value) {
          position++
        }
      }
      while (value === list[position]) {
        position++
      }
      const oldValueCycle = list[position]
      list[position] = value
      value = oldValueCycle
    }
  }
  return list
}

export { cycleSort }
