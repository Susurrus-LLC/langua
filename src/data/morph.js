export const defData = {
  categories: [
    {
      variable: 'V',
      letters: ['i', 'e', 'a', 'o', 'u']
    },
    {
      variable: 'L',
      letters: ['ī', 'ē', 'ā', 'ō', 'ū']
    },
    {
      variable: 'C',
      letters: ['p', 't', 'c', 'q', 'b', 'd', 'g', 'm', 'n', 'l', 'r', 'h', 's']
    },
    {
      variable: 'F',
      letters: ['i', 'e']
    },
    {
      variable: 'B',
      letters: ['o', 'u']
    },
    {
      variable: 'S',
      letters: ['p', 't', 'c']
    },
    {
      variable: 'Z',
      letters: ['b', 'd', 'g']
    }
  ],
  rewriteRules: [
    {
      pattern: 'lh',
      substitution: 'lj'
    }
  ],
  soundChanges: [
    {
      input: '[sm]',
      output: '',
      context: '_#'
    },
    {
      input: 'i',
      output: 'j',
      context: '_V'
    },
    {
      input: 'L',
      output: 'V',
      context: '_'
    },
    {
      input: 'e',
      output: '',
      context: 'Vr_#'
    },
    {
      input: 'v',
      output: '',
      context: 'V_V'
    },
    {
      input: 'u',
      output: 'o',
      context: '_#'
    },
    {
      input: 'gn',
      output: 'nh',
      context: '_'
    },
    {
      input: 'S',
      output: 'Z',
      context: 'V_V'
    },
    {
      input: 'c',
      output: 'i',
      context: 'F_t'
    },
    {
      input: 'c',
      output: 'u',
      context: 'B_t'
    },
    {
      input: 'p',
      output: '',
      context: 'V_t'
    },
    {
      input: 'ii',
      output: 'i',
      context: '_'
    },
    {
      input: 'e',
      output: '',
      context: 'C_rV'
    }
  ],
  lexicon: [
    'lector',
    'doctor',
    'focus',
    'jocus',
    'districtus',
    'cīvitatem',
    'adoptare',
    'opera',
    'secundus',
    'fīliam',
    'pōntem'
  ],
  outputFormat: 'oo',
  showDiff: true,
  ruleReport: true,
  rewriteOutput: true,
  results: undefined
}
