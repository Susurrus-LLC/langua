import * as v from '../../styles/variables'

const styles = {
  footer: {
    textAlign: 'center',
    borderTop: {
      width: 1,
      style: 'solid',
      color: v.blu.darken(0.15).string()
    },
    padding: {
      top: `${2 * v.lnht}rem`,
      right: 0,
      bottom: `${2 * v.lnht}rem`,
      left: 0
    }
  }
}

export default styles
