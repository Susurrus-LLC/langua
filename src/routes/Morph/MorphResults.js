import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

const MorphResults = props => {
  let resultsArr = props.results || []

  const outputText = styles => {
    const format = result => {
      if (props.outputFormat === 'oo') {
        return result.output.trim()
      } else if (props.outputFormat === 'io') {
        return `${result.input.trim()} → ${result.output.trim()}`
      } else if (props.outputFormat === 'oi') {
        return `${result.output.trim()} ← ${result.input.trim()}`
      }
    }

    const classes = result => {
      if (result.changed) {
        return classNames(props.styles.outText, props.styles.changed)
      } else {
        return props.styles.outText
      }
    }

    return resultsArr.length > 0 ? (
      resultsArr.map((result, i) => (
        <p className={classes(result)} key={i}>
          {format(result)}
        </p>
      ))
    ) : (
      <p className={props.styles.outText} />
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
      if (resultsArr[i].changed) {
        differentWords++
      }
    }
    const changedWords = totalWords - unchangedWords
    const sameWords = totalWords - differentWords
    return {
      total: totalWords,
      changed: changedWords,
      unchanged: unchangedWords,
      different: differentWords,
      same: sameWords
    }
  }

  const statsText = () => {
    const stats = countStats()
    return `${stats.changed} of ${stats.total} words changed (${
      stats.unchanged
    } unchanged); ${stats.different} of ${
      stats.total
    } words different from last time (${stats.same} the same)`
  }

  return (
    <Results>
      <div className={props.styles.output}>{outputText(props.styles)}</div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

MorphResults.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  outputFormat: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      input: PropTypes.string.isRequired,
      output: PropTypes.string.isRequired,
      changed: PropTypes.bool.isRequired
    })
  )
}

export default injectSheet(sharedResultsStyles)(MorphResults)
