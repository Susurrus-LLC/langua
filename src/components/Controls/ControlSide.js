import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const ControlSide = props => {
  if (props.side === 'left') {
    return props.addedClasses ? (
      <div
        className={classNames(props.classes.controlLeft, props.addedClasses)}
      >
        {props.children}
      </div>
    ) : (
      <div className={props.classes.controlLeft}>{props.children}</div>
    )
  } else {
    return props.addedClasses ? (
      <div
        className={classNames(props.classes.controlRight, props.addedClasses)}
      >
        {props.children}
      </div>
    ) : (
      <div className={props.classes.controlRight}>{props.children}</div>
    )
  }
}

ControlSide.propTypes = {
  classes: PropTypes.object,
  side: PropTypes.oneOf(['left', 'right']),
  addedClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ])
}

export default injectSheet(styles)(ControlSide)
