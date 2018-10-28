import * as v from '../../styles/variables'

const styles = {
  sectionTitle: {
    margin: 0
  },
  part: {
    marginTop: `${v.lnht}rem`
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  },
  controlLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  },
  controlRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  controlPiece: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    margin: `${v.lnht}rem`,
    verticalAlign: 'middle'
  },
  hidden: {
    display: 'none'
  }
}

export default styles
