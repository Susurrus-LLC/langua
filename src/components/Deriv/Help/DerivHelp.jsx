import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const DerivHelp = ({classes}) => (
  <div className={classes.derivHelp}>
    <h2 className='tool-title'>LanguaDeriv Help</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(DerivHelp)
