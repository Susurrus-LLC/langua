import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

const FrequenHelp = ({classes}) => (
  <div className={classes.frequenHelp}>
    <HelpLink link='/frequen'>
      Back
    </HelpLink>
    <h2 className='tool-title'>LanguaFrequen Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
