import * as v from '../../styles/styleVariables'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottom: [[1, 'solid', v.blu.darken(0.15).string()]]
  },
  titleArea: {
    order: 0
  },
  nav: {
    order: 1,
    flexGrow: 1
  },
  menu: {
    textAlign: 'right',
    fontFamily: v.headerFont,
    '& li': {
      display: 'inline-block',
      margin: [[0, `${v.lnht * 2}rem`]],
      padding: 0,
      fontSize: `${v.ms2}rem`,
      lineHeight: `${v.lnht * 2}rem`
    }
  },
  siteTitle: {
    marginBottom: `${v.lnht}rem`,
    '& a': {
      color: v.blu.darken(0.2).string()
    }
  },
  siteSubtitle: {
    fontStyle: 'italic'
  }
}

export default styles
