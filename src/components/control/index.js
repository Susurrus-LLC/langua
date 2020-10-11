import React from 'react'
import PropTypes from 'prop-types'

import styles from './control.module.sass'

const Control = ({ addedClasses, children }) => {
  const classes = addedClasses
    ? `${styles.control} ${addedClasses}`
    : `${styles.control}`

  return <div className={classes}>{children}</div>
}

Control.propTypes = {
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

export default Control
