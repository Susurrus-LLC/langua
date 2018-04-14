import * as Color from 'color'

// Function ported from the SASS mix() function, based on the source code at http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
const mix = (color1, color2, weight = 0.5) => {
  if (weight < 0) { weight = 0 }
  if (weight > 1) { weight = 1 }
  const w = weight * 2 - 1 // the weight normalized between -1 and 1
  const da = color1.alpha() - color2.alpha() // the difference in alpha values

  const w1 = ((w * da === -1 ? w : (w + da) / (1 + w * da)) + 1) / 2
  const w2 = 1 - w1

  const r = color1.red() * w1 + color2.red() * w2
  const g = color1.green() * w1 + color2.green() * w2
  const b = color1.blue() * w1 + color2.blue() * w2
  const a = color1.alpha() * weight + color2.alpha() * (1 - weight)
  let mixed = new Color(`rgba(${r}, ${g}, ${b}, ${a})`)
  return mixed
}

// Function ported from the SASS complement() function, based on the source code at http://sass-lang.com/documentation/Sass/Script/Functions.html#complement-instance_method

const complement = (color) => {
  let h = color.hue + 180
  if (h >= 360) { h -= 360 }
  let complemented = new Color(`hsla(${h}, ${color.saturationl()}, ${color.lightness()}, ${color.alpha()})`)
  return complemented
}

// Colors based on https://tallys.github.io/color-theory/

const isCoolColor = (color) => {
  return color.hue < 300 && color.hue > 120
}

const isHighKeyValue = (color) => {
  return color.hue > 30 && color.hue < 140
}

const isHighestKeyValue = (color) => {
  return color.hue > 50 && color.hue < 105
}

export const harmoniousMix = (mix, base) => {
  if (isCoolColor(mix)) {
    if (isHighKeyValue(base)) {
      return mix(mix, base, 0.11)
    } else {
      return mix(mix, base, 0.16)
    }
  } else {
    if (isHighKeyValue(base)) {
      return mix(mix, base, 0.13)
    } else {
      return mix(mix, base, 0.23)
    }
  }
}

export const mixNeutral = (color) => {
  if (isHighestKeyValue(color)) {
    if (isHighKeyValue(color)) {
      return mix(complement(color), color, 0.19)
    } else {
      return mix(complement(color), color, 0.13)
    }
  } else if (isHighKeyValue(color)) {
    if (isHighKeyValue(complement(color))) {
      return mix(complement(color), color, 0.31)
    } else {
      return mix(complement(color), color, 0.23)
    }
  } else {
    if (isHighestKeyValue(complement(color))) {
      return mix(complement(color), color, 0.31)
    } else if (isHighKeyValue(complement(color))) {
      return mix(complement(color), color, 0.26)
    } else {
      return mix(complement(color), color, 0.23)
    }
  }
}
