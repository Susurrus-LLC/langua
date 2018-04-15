import * as v from '../../styles/variables'

const styles = {
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottom: {
      width: '1px',
      style: 'solid',
      color: v.blu.darken(0.15).string()
    },
    '& .title-area': {
      order: 0
    },
    '& .site-title': {
      marginBottom: `${v.lnht}rem`,
      '& a, a:link, a:visited, a:hover, a:active, a:hover:active': {
        color: v.blu.darken(0.3).string()
      }
    },
    '& .site-subtitle': {
      fontStyle: 'italic'
    },
    '& nav': {
      order: 1,
      flexGrow: 1,
      '& .menu': {
        textAlign: 'right',
        fontFamily: v.headerFont,
        '& li': {
          display: 'inline-block',
          margin: [[0, `${v.lnht * 2}rem`]],
          padding: 0,
          fontSize: `${v.ms2}rem`,
          lineHeight: `${v.lnht * 2}rem`
        }
      }
    }
  }
}

export default styles
