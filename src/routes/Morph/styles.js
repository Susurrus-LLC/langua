import * as v from '../../styles/variables'

const styles = {
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    width: '100%'
  },
  container: {
    position: 'relative',
    width: '100%',
    height: `calc(100% - ${2 * v.lnht}rem)` /* 100% minus the header height */
  },
  dataInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resize: 'none',
    wordWrap: 'normal',
    padding: 2
  },
  textAreaSpacer: {
    width: '100%',
    height: '100%',
    wordWrap: 'normal',
    whiteSpace: 'pre',
    padding: {
      top: 2,
      right: `${v.lnht}rem`,
      bottom: `${v.lnht}rem`,
      left: 2
    },
    borderWidth: 1,
    visibility: 'hidden'
  },
  inputSection: {
    minWidth: `${3 * v.ms6}rem`,
    flexGrow: 2,
    padding: `0 ${v.lnht / 2}rem`
  },
  outText: {
    whiteSpace: 'pre-wrap'
  }
}

export default styles
