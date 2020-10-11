import React from 'react'
import PropTypes from 'prop-types'

import styles from './results.module.sass'

const Results = ({ children }) => (
  <div className={styles.results}>{children}</div>
)

Results.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ])
}

export default Results
