import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Deriv = ({classes}) => (
  <div className={classes.deriv}>
    <h2 class='tool-title'>LanguaDeriv</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Deriv)
