import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

const MorphResults = props => {
  const outputText = styles => {
    let joinedResults = ''
    if (props.results) {
      let output = []
      if (props.outputFormat === 'oo') {
        for (let i = 0; i < props.results.length; i++) {
          output.push(props.results[i].output)
        }
      } else if (props.outputFormat === 'io') {
        for (let i = 0; i < props.results.length; i++) {
          output.push(`${props.results[i].input} → ${props.results[i].output}`)
        }
      } else if (props.outputFormat === 'oi') {
        for (let i = 0; i < props.results.length; i++) {
          output.push(`${props.results[i].output} ← ${props.results[i].input}`)
        }
      }
      joinedResults = output.join('\n').trim()
    }
    return <p className={props.styles.outText}>{joinedResults}</p>
  }

  return (
    <Results>
      <div className={props.styles.output}>{outputText(props.styles)}</div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>The stats go here.</p>
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
      output: PropTypes.string.isRequired
    })
  )
}

export default injectSheet(sharedResultsStyles)(MorphResults)
