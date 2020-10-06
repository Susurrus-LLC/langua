import React from 'react'
import PropTypes from 'prop-types'

import styles from './control.module.sass'

const Form = ({ name, children }) => (
  <form name={name} className={styles.form}>
    {children}
  </form>
)

Form.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ])
}

export default Form
