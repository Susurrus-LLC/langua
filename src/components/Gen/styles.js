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
  results: {
    marginTop: `${v.lnht}rem`,
    paddingTop: `${v.lnht}rem`,
    borderTop: {
      width: 1,
      style: 'dotted',
      color: v.bluNtl.string()
    }
  },
  error: {
    color: v.red.string()
  },
  outText: {
    whiteSpace: 'pre-wrap'
  },
  stats: {
    paddingTop: `${v.lnht}rem`,
    borderTop: {
      width: 1,
      style: 'dotted',
      color: v.bluNtl.string()
    }
  },
  statsText: {
    fontSize: `${v.ms0}rem`,
    fontStyle: 'italic'
  }
}

export default styles
