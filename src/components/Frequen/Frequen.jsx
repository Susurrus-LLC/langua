import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <h2 className='tool-title'>LanguaFrequen</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Frequen)
