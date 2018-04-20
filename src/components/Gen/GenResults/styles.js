import * as v from '../../../styles/variables'

const styles = {
  results: {
    marginTop: `${v.lnht}rem`,
    paddingTop: `${v.lnht}rem`,
    borderTop: {
      width: 1,
      style: 'dotted',
      color: v.bluNtl.string()
    }
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
