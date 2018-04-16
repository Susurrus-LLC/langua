import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'

const Morph = ({classes}) => (
  <div className={classes.morph}>
    <h2 className='tool-title'>LanguaMorph</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Morph)
