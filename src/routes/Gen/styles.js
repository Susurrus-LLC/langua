import * as v from '../../styles/variables'

const styles = {
  duplicate: {
    outline: {
      width: 1,
      style: 'solid',
      color: v.red.string()
    }
  },
  subpsRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
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
  patternInput: {
    width: '100%',
    padding: 1,
    margin: {
      top: 1,
      right: 0,
      bottom: 1,
      left: 0
    }
  },
  wordsInput: {
    width: `${v.ms6}rem`
  },
  outText: {
    whiteSpace: 'pre-wrap'
  }
}

export default styles
