import Color from 'color'
import { harmoniousMix, mixNeutral } from './functions'

export const mainFont = '"Noto Sans", Helvetica, Arial, sans-serif'
export const headerFont = '"Noto Serif", "Palatino Linotype", Palatino, serif'

/*
 * Modular Scale
 * https://alistapart.com/article/more-meaningful-typography
 * 1rem @ 1:1.333
 * 1.1665rem @ 1:1.333
 * http://www.modularscale.com/?1,1.1665&em&1.333
 */

// All sizes are given as pure numbers, so must be given the unit 'rem'

export const ratio = 4.0 / 3.0
export const ms1 = 1.0
export const ms0 = ms1 / Math.pow(ratio, 1) // 0.750
export const ms2 = ms1 * Math.pow(ratio, 1) // 1.333
export const ms3 = ms1 * Math.pow(ratio, 2) // 1.777
export const ms4 = ms1 * Math.pow(ratio, 3) // 2.370
export const ms5 = ms1 * Math.pow(ratio, 4) // 3.160
export const ms6 = ms1 * Math.pow(ratio, 5) // 4.214
export const lnht = ms2 / 2 //                 0.6665

// Colors based on https://tallys.github.io/color-theory/

const bluPmy = Color('hsl(196, 100%, 50%)')
const ongPmy = Color('hsl(36, 100%, 50%)')
const redPmy = Color('hsl(0, 100%, 50%)')

export const blu = harmoniousMix(ongPmy, bluPmy).darken(0.2)
export const ong = harmoniousMix(bluPmy, ongPmy)
export const red = harmoniousMix(bluPmy, redPmy)
export const bluNtl = mixNeutral(blu)
export const ongNtl = mixNeutral(ong)
export const redNtl = mixNeutral(red)
export const white = bluNtl.grayscale().lightness(99)
export const black = bluNtl.grayscale().lightness(4)
