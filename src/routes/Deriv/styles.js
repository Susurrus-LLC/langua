import * as v from '../../styles/variables'

const styles = {
  wordsInput: {
    width: `${v.ms6}rem`
  },
  derivRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  outputRow: {
    justifyContent: 'flex-start'
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
  },
  outputBox: {
    margin: {
      right: `${v.ms0}rem`,
      left: `${v.ms0}rem`
    },
    '&:first-child': {
      marginLeft: 0
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  rowNumber: {
    width: `${v.ms4}rem`
  },
  term: {
    marginBottom: 0,
    fontWeight: 'bold'
  },
  gloss: {
    marginBottom: 0
  },
  lexGloss: {
    fontStyle: 'italic'
  },
  affixGloss: {
    textTransform: 'lowercase',
    fontVariant: 'small-caps',
    textDecoration: 'underline',
    textDecorationColor: v.blu.string(),
    textDecorationStyle: 'dotted'
  },
  affixDef: {
    color: v.black.lighten(5).string(),
    fontSize: `${v.ms0}rem`,
    visibility: 'hidden'
  },
  hoveredDef: {
    visibility: 'visible'
  }
}

export default styles
