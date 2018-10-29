import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../Results/Results'
import sharedResultsStyles from '../Results/sharedResultsStyles'

const MorphResults = props => <Results />

MorphResults.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object
}

export default injectSheet(sharedResultsStyles)(MorphResults)
