import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const Control = props =>
  props.addedClasses ? (
    <div className={classNames(props.classes.control, props.addedClasses)}>
      {props.children}
    </div>
  ) : (
    <div className={props.classes.control}>{props.children}</div>
  )

Control.propTypes = {
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

export default injectSheet(styles)(Control)
