// Colors based on https://tallys.github.io/color-theory/

export const complement = (color) => {
  return color.rotate(180)
}

const isCoolColor = (color) => {
  return color.hue() < 310 && color.hue() > 140
}

const isHighKeyValue = (color) => {
  return color.hue() > 20 && color.hue() < 190
}

const isHighestKeyValue = (color) => {
  return color.hue() > 30 && color.hue() < 90
}

export const harmoniousMix = (colMix, base) => {
  if (isCoolColor(colMix)) {
    if (isHighKeyValue(base)) {
      return base.mix(colMix, 0.11)
    } else {
      return base.mix(colMix, 0.16)
    }
  } else {
    if (isHighKeyValue(base)) {
      return base.mix(colMix, 0.13)
    } else {
      return base.mix(colMix, 0.23)
    }
  }
}

export const mixNeutral = (color) => {
  if (isHighestKeyValue(color)) {
    if (isHighKeyValue(color)) {
      return color.mix(complement(color), 0.19)
    } else {
      return color.mix(complement(color), 0.13)
    }
  } else if (isHighKeyValue(color)) {
    if (isHighKeyValue(complement(color))) {
      return color.mix(complement(color), 0.31)
    } else {
      return color.mix(complement(color), 0.23)
    }
  } else {
    if (isHighestKeyValue(complement(color))) {
      return color.mix(complement(color), 0.31)
    } else if (isHighKeyValue(complement(color))) {
      return color.mix(complement(color), 0.26)
    } else {
      return color.mix(complement(color), 0.23)
    }
  }
}

export const pickContrastOf = (color) => {
  let newColor = complement(color)
  if (color.lightness() < 0.3) {
    newColor.lightness(newColor.lightness() + 0.86)
  } else if (color.lightness() > 0.7) {
    newColor.lightness(newColor.lightness() - 0.68)
  } else {
    if (isHighKeyValue(color)) {
      newColor.lightness(newColor.lightness() - 0.53)
    } else {
      newColor.lightness(newColor.lightness() + 0.53)
    }
  }
  return newColor
}
