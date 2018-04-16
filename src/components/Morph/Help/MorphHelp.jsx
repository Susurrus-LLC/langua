import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'

const MorphHelp = ({classes}) => (
  <div className={classes.morphHelp}>
    <h2 className='tool-title'>LanguaMorph Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(MorphHelp)
