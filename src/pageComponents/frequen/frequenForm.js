import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const FrequenForm = () => <Form name='frequen-form' />

FrequenForm.propTypes = {
  styles: PropTypes.string
}

export default FrequenForm
