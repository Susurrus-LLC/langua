import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'

// import sharedStyles from '../../components/form/sharedForm.module.sass'

const TreeForm = () => <Form name='tree-form' />

TreeForm.propTypes = {
  styles: PropTypes.string
}

export default TreeForm
