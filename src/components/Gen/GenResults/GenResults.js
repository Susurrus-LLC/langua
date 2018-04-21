import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const GenResults = ({ classes, newLine, results, stats }) => {
  let joinedResults = Array.prototype.join.call(results, `${newLine ? '\n' : ' '}`).trim()
  let words = stats.words
  let maxWords = stats.maxWords

  return (
    <div className={classes.results}>
      <div className={classes.output}>
        <p className={classes.outText}>
          {joinedResults}
        </p>
      </div>
      <div className={classes.stats}>
        <p className={classes.statsText}>
          {`words: ${words}; maximum different words: ${maxWords}`}
        </p>
      </div>
    </div>
  )
}

export default injectSheet(styles)(GenResults)
