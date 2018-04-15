import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Deriv = ({classes}) => (
  <div className={classes.deriv}>
    <h2 class={classes.toolTitle}>LanguaDeriv</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Deriv)
