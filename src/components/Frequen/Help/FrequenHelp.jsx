import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const FrequenHelp = ({classes}) => (
  <div className={classes.frequenHelp}>
    <h2 className='tool-title'>LanguaFrequen Help</h2>
    <p className='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
