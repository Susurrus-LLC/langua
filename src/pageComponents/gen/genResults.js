import React from 'react'
import PropTypes from 'prop-types'

import Results from '../../components/results'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const GenResults = () => <Results />

GenResults.propTypes = {
  styles: PropTypes.string
}

export default GenResults
