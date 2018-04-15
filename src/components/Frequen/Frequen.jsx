import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <h2 class={classes.toolTitle}>LanguaFrequen</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Frequen)
