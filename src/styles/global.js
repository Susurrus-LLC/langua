import * as v from './variables'

const styles = {
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
      lineHeight: `${v.lnht * 2}rem`,
      backgroundColor: v.white.string(),
      color: v.black.string()
    },
    h1: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.darken(0.2).string(),
      fontSize: `${v.ms5}rem`,
      lineHeight: `${6 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${4 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    h2: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.darken(0.1).string(),
      fontSize: `${v.ms4}rem`,
      lineHeight: `${4 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${3 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    h3: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.darken(0.08).string(),
      fontSize: `${v.ms3}rem`,
      lineHeight: `${3 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${2 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    h4: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.darken(0.05).string(),
      fontSize: `${v.ms2}rem`,
      lineHeight: `${3 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${2 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    h5: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.darken(0.02).string(),
      fontSize: `${v.ms1}rem`,
      lineHeight: `${2 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${2 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    h6: {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      color: v.blu.string(),
      fontSize: `${v.ms0}rem`,
      lineHeight: `${2 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    p: {
      fontSize: `${v.ms1}rem`,
      lineHeight: `${2 * v.lnht}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${2 * v.lnht}rem`,
        left: '0'
      },
      padding: 0
    },
    a: {
      '&:link, &:visited, &:hover, &:active': {
        textDecoration: 'none'
      },
      '&:link, &:visited': {
        color: v.blu.string()
      },
      '&:hover': {
        color: v.blu.darken(0.15).string()
      },
      '&:active': {
        color: v.ong.string()
      },
      '&.active': {
        '&:link, &:visited': {
          color: v.ong.string()
        },
        '&:hover': {
          color: v.ong.darken(0.15).string()
        },
        '&:active': {
          color: v.ong.darken(0.25).string()
        }
      },
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      }
    },
    input: {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
      boxSizing: 'border-box',
      height: `${3 * v.lnht}rem`,
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      },
      '&[type=checkbox], &[type=radio]': {
        height: 'inherit',
        verticalAlign: 'baseline'
      }
    },
    button: {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
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
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      }
    },
    select: {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
      height: `${3 * v.lnht}rem`
    },
    optgroup: {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`
    },
    textarea: {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`
    }
  }
}

export default styles
