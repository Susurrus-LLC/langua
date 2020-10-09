import React from 'react'
import PropTypes from 'prop-types'

import Results from '../../components/results'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const GenResults = ({
  styles,
  newLine,
  filterDupes,
  status,
  results,
  stats
}) => {
  const words = stats.words.toLocaleString()
  const maxWords = stats.maxWords.toLocaleString()
  const filteredWords = stats.filtered.toLocaleString()
  const remainingWords = stats.remaining.toLocaleString()

  const outputText = () => {
    const filterResults = filterDupes ? Array.from(new Set(results)) : results
    const joinedResults = Array.prototype.join
      .call(filterResults, `${newLine ? '\n' : ' '}`)
      .trim()

    return <p className={styles.outText}>{joinedResults}</p>
  }

  const errorText = () => {
    if (status.includes('ok')) {
      return null
    } else {
      return status.map((error, index) => (
        <p key={index} className={sharedStyles.error}>
          {error}
        </p>
      ))
    }
  }

  const statsText = () => {
    if (filterDupes) {
      return `words: ${remainingWords} (${filteredWords} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
    }
  }

  return (
    <Results>
      <div className={styles.output}>
        {errorText()}
        {outputText()}
      </div>
      <div className={sharedStyles.stats}>
        <p className={sharedStyles.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

GenResults.propTypes = {
  styles: PropTypes.object,
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

export default GenResults
