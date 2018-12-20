import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Form from '../../components/Form'
import sharedFormStyles from '../../components/Form/sharedFormStyles'

const MorphForm = props => <Form />

MorphForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  data: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        variable: PropTypes.string.isRequired,
        letters: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired,
    rewriteRules: PropTypes.arrayOf(
      PropTypes.shape({
        pattern: PropTypes.string.isRequired,
        substitution: PropTypes.string.isRequired
      })
    ).isRequired,
    soundChanges: PropTypes.arrayOf(
      PropTypes.shape({
        input: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
        context: PropTypes.string,
        exception: PropTypes.string
      })
    ).isRequired,
    lexicon: PropTypes.arrayOf(PropTypes.string).isRequired,
    outputFormat: PropTypes.oneOf(['oo', 'io', 'oi']).isRequired,
    showDiff: PropTypes.bool.isRequired,
    ruleReport: PropTypes.bool.isRequired,
    rewriteOutput: PropTypes.bool.isRequired
  }).isRequired
}

export default injectSheet(sharedFormStyles)(MorphForm)
