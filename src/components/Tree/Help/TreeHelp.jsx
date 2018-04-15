import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const TreeHelp = ({classes}) => (
  <div className={classes.treeHelp}>
    <h2 className='tool-title'>LanguaTree Help</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(TreeHelp)
