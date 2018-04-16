import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'

const FrequenHelp = ({classes}) => (
  <div className={classes.frequenHelp}>
    <h2 className='tool-title'>LanguaFrequen Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
