import * as v from '../../styles/variables'

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap'
  },
  panel: {
    '&:link, &:visited, &:hover, &:active': {
      color: v.black.string(),
      width: '49%',
      marginBottom: `${v.lnht}rem`,
      padding: `${v.ms0}rem`,
      boxSizing: 'border-box'
    },
    '&:hover': {
      outline: {
        width: '1px',
        style: 'solid',
        color: v.blu.darken(0.15).alpha(0.3).string()
      }
    }
  },
  disabled: {
    opacity: 0.5,
    '&:hover': {
      opacity: 0.8
    },
    '& p': {
      fontStyle: 'italic'
    }
  },
  toolDescription: {
    margin: 0
  }
}

export default styles
