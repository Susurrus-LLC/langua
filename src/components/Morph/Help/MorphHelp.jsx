import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

const MorphHelp = ({classes}) => (
  <div className={classes.morphHelp}>
    <HelpLink link='/morph'>
      Back
    </HelpLink>
    <h2 className='tool-title'>LanguaMorph Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(MorphHelp)
