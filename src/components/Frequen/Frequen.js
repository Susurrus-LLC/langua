import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <HelpLink link='/frequen/help'>
      Help
    </HelpLink>
    <h2 className='tool-title'>LanguaFrequen</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Frequen)
