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
