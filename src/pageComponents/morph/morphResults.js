import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Results from '../../components/results'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const MorphResults = ({
  styles,
  outputFormat,
  results,
  showDiff,
  showChanges
}) => {
  const resultsArr = results || []

  const outputText = () => {
    // If there were errors, print them
    if (typeof resultsArr[0] === 'string') {
      return resultsArr.map((error, i) => (
        <p className={classNames(styles.outText, sharedStyles.error)} key={i}>
          {error}
        </p>
      ))
    }

    // Format the results according to the selected option
    const format = result => {
      if (outputFormat === 'oo') {
        return result.output.trim()
      } else if (outputFormat === 'io') {
        return `${result.input.trim()} ${String.fromCharCode(
          8594
        )} ${result.output.trim()}`
      } else if (outputFormat === 'oi') {
        return `${result.output.trim()} ${String.fromCharCode(
          8592
        )} ${result.input.trim()}`
      }
    }

    // Assign the 'different' and 'changed' classes appropriately
    const classes = result => {
      if (showDiff && result.diff) {
        if (showChanges && result.input !== result.output) {
          return classNames(styles.outText, styles.different, styles.changed)
        } else {
          return classNames(styles.outText, styles.different)
        }
      } else {
        if (showChanges && result.input !== result.output) {
          return classNames(styles.outText, styles.changed)
        } else {
          return styles.outText
        }
      }
    }

    // Return the results text
    return resultsArr.length > 0 ? (
      resultsArr.map((result, i) => (
        <p className={classes(result)} key={i}>
          {format(result)}
        </p>
      ))
    ) : (
      <p className={styles.outText} />
    )
  }

  const countStats = () => {
    const totalWords = resultsArr.length
    let unchangedWords = 0
    let differentWords = 0
    for (let i = 0; i < totalWords; i++) {
      if (resultsArr[i].input === resultsArr[i].output) {
        unchangedWords++
      }

      if (resultsArr[i].diff) {
        differentWords++
      }
    }

    const changedWords = totalWords - unchangedWords
    const sameWords = totalWords - differentWords

    return {
      total: totalWords,
      changed: changedWords,
      unchangedWords: unchangedWords,
      different: differentWords,
      same: sameWords
    }
  }

  const statsText = () => {
    const stats = countStats()
    return `${stats.changed} of ${stats.total} words changed (${stats.unchanged} unchanged); ${stats.different} of ${stats.total} words different from last time (${stats.same} the same)`
  }

  return (
    <Results>
      <div className={styles.output}>{outputText()}</div>
      <div className={sharedStyles.stats}>
        <p className={sharedStyles.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

MorphResults.propTypes = {
  styles: PropTypes.object,
  outputFormat: PropTypes.string.isRequired,
  results: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        input: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
        diff: PropTypes.bool.isRequired
      })
    ).isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ]),
  showDiff: PropTypes.bool.isRequired,
  showChanges: PropTypes.bool.isRequired
}

export default MorphResults
