import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './formStyles'

const Form = props => (
  <form className={props.classes.form}>{props.children}</form>
)

Form.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ])
}

export default injectSheet(styles)(Form)
