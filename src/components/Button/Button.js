import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = (props) => {
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

  if (props.type === 'file' && props.type === 'this is not ready yet') {
    // This still needs to be ironed out
    return (
      <input
        onClick={props.onClick}
        id={props.id}
        className={classNames(props.classes.btn, filterClass(props.ver, props.classes), props.classes[props.addClass])}
        type={props.type}
      />
    )
  } else {
    return (
      <button
        onClick={props.onClick}
        id={props.id}
        className={classNames(props.classes.btn, filterClass(props.ver, props.classes), props.classes[props.addClass])}
        type={props.type}
        role={props.role || 'button'}
      >
        {props.children}
      </button>
    )
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  addClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  ver: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default injectSheet(styles)(Button)
