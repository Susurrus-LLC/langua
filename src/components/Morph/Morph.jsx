import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

const Morph = ({classes}) => (
  <div className={classes.morph}>
    <HelpLink link='/morph/help'>
      Help
    </HelpLink>
    <h2 className='tool-title'>LanguaMorph</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Morph)
