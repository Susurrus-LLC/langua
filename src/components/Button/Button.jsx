import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const filterClass = (type) => {
  if (type === 'neutral' || type === 'success' || type === 'danger') {
    return type
  }
}

const Button = ({ classes, onClick, type, children }) => (
  <button
    onClick={onClick}
    className={classNames(classes.btn, filterClass(type))}
  >
    {children}
  </button>
)

export default injectSheet(styles)(Button)
