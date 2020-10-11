import React from 'react'
import PropTypes from 'prop-types'

import styles from './control.module.sass'

const ControlPiece = ({ addedClasses, children }) => {
  const classes = addedClasses
    ? `${styles.controlPiece} ${addedClasses}`
    : `${styles.controlPiece}`

  return <div className={classes}>{children}</div>
}

ControlPiece.propTypes = {
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
