import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const GenResults = ({ classes, newLine, results, stats }) => {
  let joinedResults = Array.prototype.join.call(results, `${newLine ? '\n' : ' '}`).trim()
  let words = stats.words
  let maxWords = stats.maxWords
  let filtered = stats.filtered

  const statsText = () => {
    if (filtered > 0) {
      return `words: ${words.toLocaleString()} (${filtered.toLocaleString()} filtered out); maximum different words: ${maxWords.toLocaleString()}`
    } else {
      return `words: ${words.toLocaleString()}; maximum different words: ${maxWords.toLocaleString()}`
    }
  }

  return (
    <div className={classes.results}>
      <div className={classes.output}>
        <p className={classes.outText}>
          {joinedResults}
        </p>
      </div>
      <div className={classes.stats}>
        <p className={classes.statsText}>
          {statsText()}
        </p>
      </div>
    </div>
  )
}

export default injectSheet(styles)(GenResults)
