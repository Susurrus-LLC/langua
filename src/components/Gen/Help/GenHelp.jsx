import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const GenHelp = ({classes}) => (
  <div className={classes.genHelp}>
    <h2 className='tool-title'>LanguaGen Help</h2>
    <p className='notice'>This tool is still in development and a help file is not yet available.</p>
  </div>
)

export default injectSheet(styles)(GenHelp)
