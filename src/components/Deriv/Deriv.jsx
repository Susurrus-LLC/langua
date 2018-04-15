import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Deriv = ({classes}) => (
  <div className={classes.deriv}>
    <h2 className='tool-title'>LanguaDeriv</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Deriv)
