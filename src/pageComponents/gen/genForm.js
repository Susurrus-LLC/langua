import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const GenForm = () => <Form name='gen-form' />

GenForm.propTypes = {
  styles: PropTypes.string
}

export default GenForm
