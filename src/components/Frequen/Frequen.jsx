import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <h2 className='tool-title'>LanguaFrequen</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Frequen)
