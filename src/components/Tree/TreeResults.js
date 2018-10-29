import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../Results/Results'
import sharedResultsStyles from '../Results/sharedResultsStyles'

const TreeResults = props => <Results />

TreeResults.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object
}

export default injectSheet(sharedResultsStyles)(TreeResults)
