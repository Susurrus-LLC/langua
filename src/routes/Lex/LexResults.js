import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

const LexResults = props => <Results />

LexResults.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object
}

export default injectSheet(sharedResultsStyles)(LexResults)
