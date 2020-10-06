import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const MorphForm = () => <Form name='morph-form' />

MorphForm.propTypes = {
  styles: PropTypes.string
}

export default MorphForm
