import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Gen = ({classes}) => (
  <div className={classes.gen}>
    <h2 class={classes.toolTitle}>LanguaGen</h2>
    <p class={classes.notice}>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Gen)
