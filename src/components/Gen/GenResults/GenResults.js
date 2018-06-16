import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'

const GenResults = (props) => {
  let joinedResults = Array.prototype.join.call(props.results, `${props.newLine ? '\n' : ' '}`).trim()
  let words = props.stats.words.toLocaleString()
  let maxWords = props.stats.maxWords.toLocaleString()
  let filtered = props.stats.filtered // If converted here, the comparison below won't work because the string will be NaN

  const statsText = () => {
    if (filtered > 0) {
      return `words: ${words} (${filtered.toLocaleString()} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
    }
  }

  return (
    <div className={props.classes.results}>
      <div className={props.classes.output}>
        <p className={props.classes.outText}>
          {joinedResults}
        </p>
      </div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>
          {statsText()}
        </p>
      </div>
    </div>
  )
}

GenResults.propTypes = {
  classes: PropTypes.object.isRequired,
  newLine: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  stats: PropTypes.object.isRequired
}

export default injectSheet(styles)(GenResults)
