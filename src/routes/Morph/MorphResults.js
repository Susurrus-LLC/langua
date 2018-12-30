import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

const MorphResults = props => {
  return (
    <Results>
      <div className={props.styles.output}>
        <p className={props.styles.outText}>{JSON.stringify(props.results)}</p>
      </div>
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
