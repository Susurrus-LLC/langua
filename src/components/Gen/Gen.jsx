import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Gen = ({classes}) => (
  <div className={classes.gen}>
    <h2 class='tool-title'>LanguaGen</h2>
    <p class='notice'>This tool is still in development. Please be patient until it is complete.</p>
  </div>
)

export default injectSheet(styles)(Gen)
