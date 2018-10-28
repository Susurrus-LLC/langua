import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Form from '../Form/Form'
import sharedFormStyles from '../Form/sharedFormStyles'

const DerivForm = props => <Form />

DerivForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object
}

export default injectSheet(sharedFormStyles)(DerivForm)
