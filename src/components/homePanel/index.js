import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './homePanel.module.sass'

const HomePanel = props => (
  <Link
    to={props.linkTo}
    className={
      props.disabled ? `${styles.panel} ${styles.disabled}` : styles.panel
    }
  >
    <h2 className={styles.toolTitle}>{props.toolTitle}</h2>
    <p className={styles.toolDescription}>{props.children}</p>
  </Link>
)

HomePanel.propTypes = {
  classes: PropTypes.object,
  linkTo: PropTypes.string.isRequired,
  toolTitle: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default HomePanel
