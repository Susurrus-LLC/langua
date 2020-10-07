import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const DerivForm = () => <Form name='deriv-form' />

DerivForm.propTypes = {
  styles: PropTypes.string
}

export default DerivForm
