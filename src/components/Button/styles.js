import * as v from '../../styles/variables'

const styles = {
  btn: {
    border: {
      width: '1px',
      style: 'solid',
      color: v.blu.darken(0.15).alpha(0.3).string()
    },
    background: 'none',
    backgroundColor: v.white.darken(0.05).string(),
    padding: `${v.lnht}rem`,
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: v.white.darken(0.1).string()
    },
    '&:active': {
      backgroundColor: v.white.darken(0.15).string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: `${v.lnht}rem`,
        spread: null,
        color: v.white.darken(0.25).string()
      }
    },
    '&.success, &.neutral, &.danger': {
      color: v.white.string()
    },
    '&.success': {
      backgroundColor: v.blu.darken(0.05).string(),
      '&:hover': {
        backgroundColor: v.blu.darken(0.07).string()
      },
      '&:active': {
        backgroundColor: v.bluNtl.darken(0.07).string(),
        boxShadow: {
          inset: 'inset',
          x: 0,
          y: 0,
          blur: `${v.lnht}rem`,
          spread: null,
          color: v.bluNtl.lighten(0.17).string()
        }
      }
    },
    '&.neutral': {
      backgroundColor: v.ong.darken(0.05).string(),
      border: {
        width: '1px',
        style: 'solid',
        color: v.ong.darken(0.15).alpha(0.3).string()
      },
      '&:hover': {
        backgroundColor: v.ong.darken(0.07).string()
      },
      '&:active': {
        backgroundColor: v.ongNtl.darken(0.07).string(),
        boxShadow: {
          inset: 'inset',
          x: 0,
          y: 0,
          blur: `${v.lnht}rem`,
          spread: null,
          color: v.ongNtl.darken(0.17).string()
        }
      }
    },
    '&.danger': {
      backgroundColor: v.red.darken(0.05).string(),
      border: {
        width: '1px',
        style: 'solid',
        color: v.red.darken(0.15).alpha(0.3).string()
      },
      '&:hover': {
        backgroundColor: v.red.darken(0.07).string()
      },
      '&:active': {
        backgroundColor: v.redNtl.darken(0.07).string(),
        boxShadow: {
          inset: 'inset',
          x: 0,
          y: 0,
          blur: `${v.lnht}rem`,
          spread: null,
          color: v.redNtl.darken(0.17).string()
        }
      }
    }
  }
}

export default styles
