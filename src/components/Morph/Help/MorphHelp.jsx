import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const MorphHelp = ({classes}) => (
  <div className={classes.morphHelp}>
    <h2 class='tool-title'>LanguaMorph Help</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(MorphHelp)
