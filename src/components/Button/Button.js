import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = props => {
  const filterClass = (ver, classes) => {
    if (ver === 'neutral') {
      return classes.neutral
    } else if (ver === 'success') {
      return classes.success
    } else if (ver === 'danger') {
      return classes.danger
    } else {
      return null
    }
  }

  return (
    <button
      onClick={props.onClick}
      id={props.id}
      className={classNames(
        props.classes.btn,
        filterClass(props.ver, props.classes),
        props.classes[props.addClass]
      )}
      type={props.type}
      role={props.role || 'button'}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  ver: PropTypes.oneOf(['neutral', 'success', 'danger']),
  onClick: PropTypes.func,
  id: PropTypes.string,
  addClass: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string,
  classes: PropTypes.object
}

export default injectSheet(styles)(Button)
