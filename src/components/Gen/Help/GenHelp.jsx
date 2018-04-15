import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const GenHelp = ({classes}) => (
  <div className={classes.genHelp}>
    <h2 class={classes.toolTitle}>LanguaGen Help</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(GenHelp)
