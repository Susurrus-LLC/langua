import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const FrequenHelp = ({classes}) => (
  <div className={classes.frequenHelp}>
    <h2 class='tool-title'>LanguaFrequen Help</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
