import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <h2 class='tool-title'>LanguaFrequen</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Frequen)
