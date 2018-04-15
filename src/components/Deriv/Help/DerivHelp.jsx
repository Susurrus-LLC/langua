import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const DerivHelp = ({classes}) => (
  <div className={classes.derivHelp}>
    <h2 class={classes.toolTitle}>LanguaDeriv Help</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(DerivHelp)
