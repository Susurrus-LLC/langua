export type variable = '-' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

type subpatterns = {
  selected: variable,
  subpattern: string
}

export type GenData = {
  subpatterns: subpatterns[],
  pattern: string,
  words: number,
  newline: boolean,
  filterdupes: boolean
}

export const genData: GenData = {
  subpatterns: [
    {
      selected: 'V',
      subpattern: 'a/i/u'
    }, {
      selected: 'C',
      subpattern: 'p/t/k/s/m/n'
    }, {
      selected: 'N',
      subpattern: 'm/n'
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }, {
      selected: '-',
      subpattern: ''
    }
  ],
  pattern: 'CV(CV)(N)',
  words: 100,
  newline: false,
  filterdupes: false
}

export const variables: variable[] = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
