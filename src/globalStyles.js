import * as v from './styles/variables'

const styles = {
  '@global': {
    body: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: v.mainFont,
      fontSize: `${v.ms1}rem`,
      lineHeight: `${v.lnht * 2}rem`,
      backgroundColor: v.white.string(),
      color: v.black.string()
    }
  }
}

export default styles
