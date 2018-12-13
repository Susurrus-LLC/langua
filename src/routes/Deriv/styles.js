import * as v from '../../styles/variables'

const styles = {
  wordsInput: {
    width: `${v.ms6}rem`
  },
  lexemeRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  lexemeInput: {
    width: `${2 * v.ms5}rem`
  },
  lexemeDefInput: {
    flexGrow: 1
  },
  derivationRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  derivationInput: {
    width: `${2 * v.ms4}rem`
  },
  derivationLabelInput: {
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
