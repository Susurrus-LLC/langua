import React from 'react'
import PropTypes from 'prop-types'

import Results from '../../components/results'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const FrequenResults = () => <Results />

FrequenResults.propTypes = {
  styles: PropTypes.string
}

export default FrequenResults
