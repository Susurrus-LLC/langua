import React from 'react'
import PropTypes from 'prop-types'

import styles from './notice.module.sass'

const Notice = ({ children }) => <p className={styles.notice}>{children}</p>

Notice.propTypes = {
  children: PropTypes.string
}

export default Notice
