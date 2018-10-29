import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const ControlPiece = props =>
  props.addedClasses ? (
    <div className={classNames(props.classes.controlPiece, props.addedClasses)}>
      {props.children}
    </div>
  ) : (
    <div className={props.classes.controlPiece}>{props.children}</div>
  )

ControlPiece.propTypes = {
  classes: PropTypes.object,
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

export default injectSheet(styles)(ControlPiece)
