import * as v from './styles/variables'

const styles = {
  app: {
    width: `${v.ms1 * Math.pow(v.ratio, 15)}rem`, // 74.551rem; 1192.8px
    maxWidth: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& .head, .main, .foot': {
      padding: {
        top: `${2 * v.lnht}rem`,
        right: 0,
        bottom: `${2 * v.lnht}rem`,
        left: 0
      }
    },
    '& a': {
      textDecoration: 'none',
      '&:link, &:visited': {
        color: v.blu.string()
      },
      '&:hover': {
        color: v.blu.darken(0.15).string()
      },
      '&:active': {
        color: v.ong.string(),
        '&:hover': {
          color: v.ong.darken(0.15).string()
        }
      },
      '&.active': {
        '&:link, &:visited': {
          color: v.ong.string()
        },
        '&:hover': {
          color: v.ong.darken(0.15).string()
        },
        '&:active': {
          color: v.ong.darken(0.25).string(),
          '&:hover': {
            color: v.ong.darken(0.35).string()
          }
        }
      }
    },
    '& a:focus, input:focus, button:focus': {
      outline: {
        width: '1px',
        style: 'solid',
        color: v.blu.darken(0.15).alpha(0.3).string()
      }
    },
    '& h1, h2, h3, h4, h5, h6, .lang': {
      fontFamily: v.headerFont
    },
    '& h1, h2, h3, h4, h5, h6': {
      textRendering: 'optimizeLegibility'
    },
    '& h1': {
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
    '& h2': {
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
    '& h3': {
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
    '& h4': {
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
    '& h5': {
      color: v.blu.darken(0.02).string()
    },
    '& h5, p': {
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
    '& h6': {
      color: v.blu,
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
    '& button, input, optgroup, select, textarea': {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`
    },
    '& input': {
      boxSizing: 'border-box'
    },
    '& select, input': {
      height: `${3 * v.lnht}rem`
    },
    '& input[type=checkbox], input[type=radio]': {
      height: 'inherit',
      verticalAlign: 'baseline'
    },
    '& button': {
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
      }
    }
  }
}

export default styles
