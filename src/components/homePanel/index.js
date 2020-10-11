import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './homePanel.module.sass'

const HomePanel = ({ linkTo, toolTitle, disabled, children }) => (
  <Link
    to={linkTo}
    className={disabled ? `${styles.panel} ${styles.disabled}` : styles.panel}
  >
    <h2 className={styles.toolTitle}>{toolTitle}</h2>
    <p className={styles.toolDescription}>{children}</p>
  </Link>
)

HomePanel.propTypes = {
  linkTo: PropTypes.string.isRequired,
  toolTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default HomePanel
