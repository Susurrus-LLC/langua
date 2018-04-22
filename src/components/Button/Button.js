import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const Button = ({ classes, addClass, onClick, type, ver, children }) => {
  const filterClass = (ver, classes) => {
    if (ver === 'neutral') {
      return classes.neutral
    } else if (ver === 'success') {
      return classes.success
    } else if (ver === 'danger') {
      return classes.danger
    }
  }

  if (type === 'file' && type === 'this is not ready yet') {
    // This still needs to be ironed out
    return (
      <input
        onClick={onClick}
        className={classNames(classes.btn, filterClass(ver, classes), classes[addClass])}
        type={type}
      />
    )
  } else {
    return (
      <button
        onClick={onClick}
        className={classNames(classes.btn, filterClass(ver, classes), classes[addClass])}
        type={type}
      >
        {children}
      </button>
    )
  }
}

export default injectSheet(styles)(Button)
