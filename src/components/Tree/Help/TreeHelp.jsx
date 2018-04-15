import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const TreeHelp = ({classes}) => (
  <div className={classes.treeHelp}>
    <h2 class={classes.toolTitle}>LanguaTree Help</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(TreeHelp)
