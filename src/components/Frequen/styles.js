import * as v from '../../styles/variables'

const styles = {
  form: {
    '& label': {
      marginLeft: `${v.lnht}rem`,
      marginRight: `${v.lnht}rem`,
      verticalAlign: 'middle'
    }
  },
  sectionTitle: {
    margin: 0
  },
  corpus: {
    height: `${2 * v.ms6}rem`
  },
  input: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: `${v.lnht}rem`
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
  }
}

export default styles
