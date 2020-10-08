import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './control.module.sass'

const ControlSide = ({ side, addedClasses, children }) => {
  const setClasses = () => {
    return classNames(
      styles.controlSide,
      side === 'left' ? styles.controlLeft : styles.controlRight,
      addedClasses
    )
  }

  return <div className={setClasses()}>{children}</div>
}

ControlSide.propTypes = {
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

export default ControlSide
