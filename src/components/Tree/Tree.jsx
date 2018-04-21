import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

const Tree = ({classes}) => (
  <div className={classes.tree}>
    <HelpLink link='/tree/help'>
      Help
    </HelpLink>
    <h2 className='tool-title'>LanguaTree</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Tree)
