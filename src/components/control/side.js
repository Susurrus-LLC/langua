import React from 'react'
import PropTypes from 'prop-types'

import styles from './control.module.sass'

const ControlPiece = ({ side, addedClasses, children }) => {
  const setClasses = () => {
    let classes = styles.controlPiece

    if (side === 'left') {
      classes += ` ${styles.controlLeft}`
    } else {
      classes += ` ${styles.controlRight}`
    }

    if (addedClasses) {
      classes += ` ${addedClasses}`
    }
  }

  return <div className={setClasses()}>{children}</div>
}

ControlPiece.propTypes = {
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

export default ControlPiece
