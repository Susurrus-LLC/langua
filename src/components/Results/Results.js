import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './resultsStyles'

const Results = props => (
  <div className={props.classes.results}>{props.children}</div>
)

Results.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ])
}

export default injectSheet(styles)(Results)
