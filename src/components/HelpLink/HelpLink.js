import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles'

const HelpLink = ({ classes, children, link }) => (
  <Link
    className={classes.help}
    to={link}
  >
    {children}
  </Link>
)

export default injectSheet(styles)(HelpLink)
