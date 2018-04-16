import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'

const GenHelp = ({classes}) => (
  <div className={classes.genHelp}>
    <h2 className='tool-title'>LanguaGen Help</h2>
    <Notice>This tool is still in development and a help file is not yet available.</Notice>
  </div>
)

export default injectSheet(styles)(GenHelp)
