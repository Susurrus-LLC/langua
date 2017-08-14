type subpatterns = {
  selected: string,
  subpattern: string
}

export type GenData = {
  subpatterns: subpatterns[],
  pattern: string
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
    }
  ],
  pattern: 'CV(CV)(N)'
}

export const variables: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
