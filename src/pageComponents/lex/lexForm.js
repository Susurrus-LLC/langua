import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

// import sharedStyles from '../../components/form/sharedForm.module.sass'

const LexForm = () => <Form name='lex-form' />

LexForm.propTypes = {
  styles: PropTypes.string
}

export default LexForm
