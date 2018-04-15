import * as v from '../../styles/variables'

const styles = {
  gen: {
    '& .duplicate': {
      outline: {
        width: '1px',
        style: 'solid',
        color: v.red.string()
      }
    },
    '& .subps-row': {
      width: '100%'
    },
    '& .subps-row, .control, .control-left, .control-right, .control-piece': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      alignContent: 'space-between'
    },
    '& input': {
      flexGrow: 1
    },
    '& select, input': {
      padding: '1px',
      margin: '1px'
    },
    '& select': {
      textAlign: 'center'
    },
    '& .pattern-input': {
      width: '100%',
      padding: '1px',
      margin: {
        top: '1px',
        right: 0,
        bottom: '1px',
        left: 0
      }
    },
    '& .part, .results': {
      marginTop: v.lnht
    },
    '& .section-title': {
      margin: 0,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: v.blu.darken(0.08).string()
    },
    '& .words-input': {
      width: v.ms5
    },
    '& .control-piece, label': {
      marginLeft: v.lnht,
      marginRight: v.lnht,
      verticalAlign: 'middle'
    }
  }
}

export default styles
