import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const GenResults = ({ classes, newLine, results, stats }) => {
  let joinedResults = Array.prototype.join.call(results, `${newLine ? '\n' : ' '}`).trim()
  let words = stats.words.toLocaleString()
  let maxWords = stats.maxWords.toLocaleString()
  let filtered = stats.filtered // If converted here, the comparison below won't work because the string will be NaN

  const statsText = () => {
    if (filtered > 0) {
      return `words: ${words} (${filtered.toLocaleString()} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
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
