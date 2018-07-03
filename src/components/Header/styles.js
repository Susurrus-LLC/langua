// @flow
import * as v from '../../styles/variables'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottom: {
      width: '1px',
      style: 'solid',
      color: v.blu.darken(0.15).string()
    },
    padding: {
      top: `${2 * v.lnht}rem`,
      right: 0,
      bottom: `${2 * v.lnht}rem`,
      left: 0
    },
    '& a, & a:link, & a:visited, & a:hover, & a:active': {
      textDecoration: 'none'
    }
  },
  titleArea: {
    order: 0
  },
  siteTitle: {
    marginBottom: `${v.lnht}rem`
  },
  titleLink: {
    '&:link, &:visited, &:hover, &:active': {
      color: v.blu.darken(0.3).string()
    }
  },
  siteSubtitle: {
    fontStyle: 'italic'
  },
  nav: {
    order: 1,
    flexGrow: 1
  },
  menu: {
    textAlign: 'right',
    fontFamily: v.headerFont
  },
  navLink: {
    display: 'inline-block',
    margin: [[0, `${v.lnht * 2}rem`]],
    padding: 0,
    fontSize: `${v.ms2}rem`,
    lineHeight: `${v.lnht * 2}rem`
  },
  disabled: {
    opacity: 0.5,
    '&:hover': {
      opacity: 0.8
    }
  }
}

export default styles
