import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const GenResults = ({ classes }) => (
  <div className={classes.results}>
    <div className={classes.output}>
      <p className={classes.text}>Output</p>
    </div>
    <div className={classes.stats}>
      <p className={classes.statsText}>Stats</p>
    </div>
  </div>
)

export default injectSheet(styles)(GenResults)
