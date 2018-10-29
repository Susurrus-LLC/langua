import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../Results/Results'
import sharedResultsStyles from '../Results/sharedResultsStyles'

const GenResults = props => {
  const words = props.stats.words.toLocaleString()
  const maxWords = props.stats.maxWords.toLocaleString()
  const filteredWords = props.stats.filtered.toLocaleString()
  const remainingWords = props.stats.remaining.toLocaleString()

  const outputText = styles => {
    const filterResults = props.filterDupes
      ? Array.from(new Set(props.results))
      : props.results
    const joinedResults = Array.prototype.join
      .call(filterResults, `${props.newLine ? '\n' : ' '}`)
      .trim()

    return <p className={styles.outText}>{joinedResults}</p>
  }

  const errorText = classes => {
    if (props.status.includes('ok')) {
      return null
    } else {
      return props.status.map((error, index) => (
        <p key={index} className={classes.error}>
          {error}
        </p>
      ))
    }
  }

  const statsText = () => {
    if (props.filterDupes) {
      return `words: ${remainingWords} (${filteredWords} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
    }
  }

  return (
    <Results>
      <div className={props.styles.output}>
        {errorText(props.classes)}
        {outputText(props.styles)}
      </div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

GenResults.propTypes = {
  classes: PropTypes.object,
  newLine: PropTypes.bool.isRequired,
  filterDupes: PropTypes.bool.isRequired,
  status: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  stats: PropTypes.shape({
    words: PropTypes.number.isRequired,
    maxWords: PropTypes.number.isRequired,
    filtered: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
  }).isRequired
}

export default injectSheet(sharedResultsStyles)(GenResults)
