import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const GenHelp = () => (
  <div className='gen-help'>
    <h2 class='tool-title'>LanguaGen Help</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(GenHelp)
