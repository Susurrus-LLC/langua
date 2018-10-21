import * as v from './variables'

const styles = {
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: 0,
      padding: 0,
      paddingLeft: 'calc(100vw - 100%)',
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
      lineHeight: v.lnht * 2,
      backgroundColor: v.white.string(),
      color: v.black.string(),
      fontKerning: 'normal',
      fontVariantLigatures: 'common-ligatures contextual',
      fontFeatureSettings: ['"kern" 1', '"liga" 1', '"clig" 1', '"calt" 1']
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: v.headerFont,
      textRendering: 'optimizeLegibility',
      margin: {
        top: `${v.lnht * 2 * (v.ms1 * 2)}rem`, // base line height * double base font size
        right: '0',
        bottom: `${v.lnht * 2 * v.ms1}rem`, // base line height * font size
        left: '0'
      },
      padding: 0
    },
    'h1, h2': {
      marginTop: 0
    },
    h1: {
      color: v.blu.darken(0.2).string(),
      fontSize: `${v.ms5}rem`
    },
    h2: {
      color: v.blu.darken(0.1).string(),
      fontSize: `${v.ms4}rem`
    },
    h3: {
      color: v.blu.darken(0.08).string(),
      fontSize: `${v.ms3}rem`
    },
    h4: {
      color: v.blu.darken(0.05).string(),
      fontSize: `${v.ms2}rem`
    },
    h5: {
      color: v.blu.darken(0.02).string(),
      fontSize: `${v.ms1}rem`
    },
    h6: {
      color: v.blu.string(),
      fontSize: `${v.ms0}rem`
    },
    p: {
      fontSize: `${v.ms1}rem`,
      margin: {
        top: '0',
        right: '0',
        bottom: `${v.lnht * 2 * v.ms1}rem`, // base line height * base font size
        left: '0'
      },
      padding: 0
    },
    a: {
      '&:link, &:visited, &:hover, &:active': {
        textDecoration: 'underline',
        TextDecorationSkipInk: 'auto'
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
          color: v.blu
            .darken(0.15)
            .alpha(0.3)
            .string()
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
          color: v.blu
            .darken(0.15)
            .alpha(0.3)
            .string()
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
      cursor: 'pointer',
      border: {
        width: '1px',
        style: 'solid',
        color: v.blu
          .darken(0.15)
          .alpha(0.3)
          .string()
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
          color: v.blu
            .darken(0.15)
            .alpha(0.3)
            .string()
        }
      }
    },
    'select, optgroup, textarea': {
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`
    },
    select: {
      height: `${3 * v.lnht}rem`
    },
    'code, kbd, samp, var': {
      fontFamily: 'monospace, monospace',
      backgroundColor: v.white.darken(0.1).string(),
      color: v.black.lighten(5).string(),
      padding: {
        top: `${v.lnht / 7}rem`,
        right: `${v.lnht / 2}rem`,
        bottom: `${v.lnht / 7}rem`,
        left: `${v.lnht / 2}rem`
      }
    },
    '.toast-update, .toast-unsaved, .toast-unopened': {
      backgroundColor: v.red
        .darken(0.1)
        .alpha(0.9)
        .string()
    },
    '.toast-cached, .toast-opened': {
      backgroundColor: v.blu
        .darken(0.1)
        .alpha(0.9)
        .string()
    },
    '.toast-offline': {
      backgroundColor: v.ong
        .darken(0.1)
        .alpha(0.9)
        .string()
    }
  }
}

export default styles
