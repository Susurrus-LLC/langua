import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const MorphHelp = () => (
  <div className='morph-help'>
    <h2 class='tool-title'>LanguaMorph Help</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(MorphHelp)
