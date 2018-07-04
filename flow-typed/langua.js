declare type Subpattern = {
  selected: string,
  subpattern: string
}

declare type Data = {
  subpatterns: Array<Subpattern>,
  pattern: string,
  words: number,
  newline: boolean,
  filterdupes: boolean
}
