import * as v from '../../styles/styleVariables'

const styles = {
  '.grid': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap'
  },
  a: {
    color: v.black,
    width: '49%',
    marginBottom: `${v.lnht}rem`,
    padding: `${v.ms0}rem`,
    boxSizing: 'border-box',
    '&:hover': {
      outline: [[1, 'solid', v.blu.darken(0.15).alpha(0.3)]]
    },
    p: {
      margin: 0
    }
  }
}

export default styles
