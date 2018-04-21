import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

const Deriv = ({classes}) => (
  <div className={classes.deriv}>
    <HelpLink link='/deriv/help'>
      Help
    </HelpLink>
    <h2 className='tool-title'>LanguaDeriv</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Deriv)
