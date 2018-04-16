import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'

const TreeHelp = ({classes}) => (
  <div className={classes.treeHelp}>
    <h2 className='tool-title'>LanguaTree Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(TreeHelp)
