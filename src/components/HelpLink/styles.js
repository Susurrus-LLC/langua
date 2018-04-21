import * as v from '../../styles/variables'

const styles = {
  help: {
    '&:link, &:visited, &:hover, &:active': {
      border: {
        width: 1,
        style: 'solid',
        color: v.blu.darken(0.6).alpha(0.3).string()
      },
      background: 'none',
      padding: `${v.lnht}rem`,
      borderRadius: 3,
      float: 'right'
    },
    '&:link, &:visited': {
      backgroundColor: v.white.darken(0.05).string()
    },
    '&:hover': {
      backgroundColor: v.white.darken(0.1).string()
    },
    '&:active': {
      backgroundColor: v.white.darken(0.2).string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: `${v.lnht}rem`,
        spread: null,
        color: v.white.darken(0.3).string()
      }
    }
  }
}

export default styles
