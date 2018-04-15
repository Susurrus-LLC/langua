import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Morph = ({classes}) => (
  <div className={classes.morph}>
    <h2 class='tool-title'>LanguaMorph</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Morph)
