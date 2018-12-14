import * as v from '../../styles/variables'

const styles = {
  wordsInput: {
    width: `${v.ms6}rem`
  },
  frequenRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  columnLabel: {
    margin: {
      top: `${v.ms0}rem`,
      bottom: 0
    }
  },
  lexemeInput: {
    width: `${2 * v.ms5}rem`
  },
  lexemeDefInput: {
    flexGrow: 1
  },
  wordLabel: {
    width: `${2 * v.ms5}rem`
  },
  definitionLabel: {
    flexGrow: 1
  },
  derivationInput: {
    width: `${2 * v.ms4}rem`
  },
  affixLabel: {
    width: `${2 * v.ms4}rem`
  },
  derivationGlossInput: {
    width: `${2 * v.ms5}rem`
  },
  glossLabel: {
    width: `${2 * v.ms5}rem`
  },
  derivationDefInput: {
    flexGrow: 1
  },
  addingRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    alignContent: 'space-between',
    padding: {
      top: 1,
      right: 0,
      bottom: 1,
      left: 0
    },
    margin: {
      top: 1,
      right: 0,
      bottom: 1,
      left: 0
    }
  }
}

export default styles
