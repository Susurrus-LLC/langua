import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

const DerivHelp = ({classes}) => (
  <div className={classes.derivHelp}>
    <HelpLink link='/deriv'>
      Back
    </HelpLink>
    <h2 className='tool-title'>LanguaDeriv Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(DerivHelp)
