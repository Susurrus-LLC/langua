import * as v from '../../styles/variables'

const styles = {
  form: {
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
  }
}

export default styles
