import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const GenResults = ({ classes, results }) => (
  <div className={classes.results}>
    <div className={classes.output}>
      <p className={classes.text}>{results}</p>
    </div>
    <div className={classes.stats}>
      <p className={classes.statsText}>Stats</p>
    </div>
  </div>
)

export default injectSheet(styles)(GenResults)
