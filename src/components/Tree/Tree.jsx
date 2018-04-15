import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Tree = ({classes}) => (
  <div className={classes.tree}>
    <h2 className='tool-title'>LanguaTree</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Tree)
