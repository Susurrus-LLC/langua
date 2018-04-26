import * as v from '../../styles/variables'

const styles = {
  btn: {
    border: {
      width: 1,
      style: 'solid',
      color: v.blu.darken(0.6).alpha(0.3).string()
    },
    background: 'none',
    backgroundColor: v.white.darken(0.05).string(),
    color: v.blu.string(),
    fontWeight: 'bold',
    padding: `${v.lnht}rem`,
    borderRadius: 3,
    '&:hover': {
      backgroundColor: v.white.darken(0.1).string(),
      color: v.blu.darken(0.15).string()
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
      },
      color: v.ong.string()
    }
  },
  neutral: {
    color: v.white.string(),
    backgroundColor: v.ong.darken(0.15).string(),
    border: {
      width: 1,
      style: 'solid',
      color: v.ong.darken(0.7).alpha(0.3).string()
    },
    '&:hover': {
      backgroundColor: v.ong.darken(0.25).string(),
      color: v.white.string()
    },
    '&:active': {
      backgroundColor: v.ongNtl.darken(0.25).string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: `${v.lnht}rem`,
        spread: null,
        color: v.ongNtl.darken(0.35).string()
      },
      color: v.white.string()
    }
  },
  success: {
    color: v.white.string(),
    backgroundColor: v.blu.string(),
    '&:hover': {
      backgroundColor: v.blu.darken(0.1).string(),
      color: v.white.string()
    },
    '&:active': {
      backgroundColor: v.bluNtl.darken(0.1).string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: `${v.lnht}rem`,
        spread: null,
        color: v.bluNtl.darken(0.2).string()
      },
      color: v.white.string()
    }
  },
  danger: {
    color: v.white.string(),
    backgroundColor: v.red.darken(0.1).string(),
    border: {
      width: 1,
      style: 'solid',
      color: v.red.darken(0.65).alpha(0.3).string()
    },
    '&:hover': {
      backgroundColor: v.red.darken(0.2).string(),
      color: v.white.string()
    },
    '&:active': {
      backgroundColor: v.redNtl.darken(0.2).string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: `${v.lnht}rem`,
        spread: null,
        color: v.redNtl.darken(0.3).string()
      },
      color: v.white.string()
    }
  },
  small: {
    fontSize: `${v.ms0}rem`,
    padding: `${v.ms1 / 2}rem`
  }
}

export default styles
