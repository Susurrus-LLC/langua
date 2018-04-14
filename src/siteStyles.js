import * as v from './styles/styleVariables'

const mainFont = 'voces, Helvetica, Arial, sans-serif'
const headerFont = 'Lusitana, "Palatino Linotype", Palatino, serif'

const styles = {
  body: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: mainFont,
    fontSize: `${v.ms1}rem`,
    lineHeight: `${v.lnht * 2}rem`,
    backgroundColor: v.white,
    color: v.black
  },
  '.header, .main, .footer': {
    width: `${v.ms1 * Math.pow(v.ratio, 15)}rem`, // 74.551rem; 1192.8px
    maxWidth: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: [[`${2 * v.lnht}rem`, 0]]
  },
  'a:focus, input:focus, button:focus': {
    outline: [[1, 'solid', v.blu.darken(0.15).alpha(0.3)]]
  },
  'h1, h2, h3, h4, h5, h6, .lang, .menu': {
    fontFamily: headerFont
  },
  'h1, h2, h3, h4, h5, h6': {
    textRendering: 'optimizeLegibility'
  },
  h1: {
    color: v.blu.darken(0.2),
    fontSize: `${v.ms5}rem`,
    lineHeight: `${6 * v.lnht}rem`,
    margin: [[0, 0, `${4 * v.lnht}rem`]],
    padding: 0
  },
  h2: {
    color: v.blu.darken(0.1),
    fontSize: `${v.ms4}rem`,
    lineHeight: `${4 * v.lnht}rem`,
    margin: [[0, 0, `${3 * v.lnht}rem`]],
    padding: 0
  },
  h3: {
    color: v.blu.darken(0.08),
    fontSize: `${v.ms3}rem`,
    lineHeight: `${3 * v.lnht}rem`,
    margin: [[0, 0, `${2 * v.lnht}rem`]],
    padding: 0
  },
  h4: {
    color: v.blu.darken(0.05),
    fontSize: `${v.ms2}rem`,
    lineHeight: `${3 * v.lnht}rem`,
    margin: [[0, 0, `${2 * v.lnht}rem`]],
    padding: 0
  },
  h5: {
    color: v.blu.darken(0.02)
  },
  'h5, p': {
    fontSize: `${v.ms1}rem`,
    lineHeight: `${2 * v.lnht}rem`,
    margin: [[0, 0, `${2 * v.lnht}rem`]],
    padding: 0
  },
  h6: {
    color: v.blu,
    fontSize: `${v.ms0}rem`,
    lineHeight: `${2 * v.lnht}rem`,
    margin: [[0, 0, `${v.lnht}rem`]],
    padding: 0
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: mainFont,
    fontSize: `${v.ms1}rem`
  },
  input: {
    boxSizing: 'border-box'
  },
  'select, input': {
    height: `${3 * v.lnht}rem`
  },
  'input[type=checkbox], input[type=radio]': {
    height: 'inherit',
    verticalAlign: 'baseline'
  },
  'button, .btn': {
    border: [[1, 'solid', v.blu.darken(0.15).alpha(0.3)]],
    background: 'none',
    backgroundColor: v.white,
    padding: `${v.lnht}rem`,
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: v.blu.lighten(0.5)
    },
    '&:active': {
      backgroundColor: v.bluNtl.lighten(0.5),
      boxShadow: [['inset', 0, 0, `${v.lnht}rem`, v.bluNtl.lighten(0.4)]]
    },
    '&.btn-success, &.btn-neutral, &.btn-danger': {
      color: v.white
    },
    '&.btn-success': {
      backgroundColor: v.blu.darken(0.05),
      '&:hover': {
        backgroundColor: v.blu.darken(0.07)
      },
      '&:active': {
        backgroundColor: v.bluNtl.darken(0.07),
        boxShadow: [['inset', 0, 0, `${v.lnht}rem`, v.bluNtl.lighten(0.17)]]
      }
    },
    '&:btn-neutral': {
      backgroundColor: v.ong.darken(0.05),
      border: [[1, 'solid', v.ong.darken(0.15).alpha(0.3)]],
      '&:hover': {
        backgroundColor: v.ong.darken(0.07)
      },
      '&:active': {
        backgroundColor: v.ongNtl.darken(0.07),
        boxShadow: [['inset', 0, 0, `${v.lnht}rem`, v.ongNtl.darken(0.17)]]
      }
    },
    '&:btn-danger': {
      backgroundColor: v.red.darken(0.05),
      border: [[1, 'solid', v.red.darken(0.15).alpha(0.3)]],
      '&:hover': {
        backgroundColor: v.red.darken(0.07)
      },
      '&:active': {
        backgroundColor: v.redNtl.darken(0.07),
        boxShadow: [['inset', 0, 0, `${v.lnht}rem`, v.redNtl.darken(0.17)]]
      }
    }
  }
}

export default styles
