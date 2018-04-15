import * as v from '../../styles/variables'

const styles = {
  home: {
    '& .grid': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      '& a, a:link, a:visited, a:hover, a:active': {
        color: v.black.string(),
        width: '49%',
        marginBottom: `${v.lnht}rem`,
        padding: `${v.ms0}rem`,
        boxSizing: 'border-box',
        '&:hover': {
          outline: {
            width: '1px',
            style: 'solid',
            color: v.blu.darken(0.15).alpha(0.3).string()
          }
        },
        '& p': {
          margin: 0
        }
      }
    }
  }
}

export default styles
