import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

const TreeHelp = ({classes}) => (
  <div className={classes.treeHelp}>
    <HelpLink link='/tree'>
      Back
    </HelpLink>
    <h2 className='tool-title'>LanguaTree Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(TreeHelp)
