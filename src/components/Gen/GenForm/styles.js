import * as v from '../../../styles/variables'

const styles = {
  form: {
    '& input': {
      flexGrow: 1
    },
    '& select, input': {
      padding: 1,
      margin: 1
    },
    '& select': {
      textAlign: 'center'
    },
    '& label': {
      marginLeft: `${v.lnht}rem`,
      marginRight: `${v.lnht}rem`,
      verticalAlign: 'middle'
    }
  },
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
  control: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  controlLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  controlRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  controlPiece: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    marginLeft: `${v.lnht}rem`,
    marginRight: `${v.lnht}rem`,
    verticalAlign: 'middle'
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
  part: {
    marginTop: `${v.lnht}rem`
  },
  results: {
    marginTop: `${v.lnht}rem`
  },
  sectionTitle: {
    margin: 0
  },
  wordsInput: {
    width: `${v.ms5}rem`
  }
}

export default styles
