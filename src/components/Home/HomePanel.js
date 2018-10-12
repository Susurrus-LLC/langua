import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const HomePanel = (props) => (
  <Link
    to={props.linkTo}
    className={props.disabled
      ? classNames(props.classes.panel, props.classes.disabled)
      : props.classes.panel
    }
  >
    <h2 className={props.classes.toolTitle}>{props.toolTitle}</h2>
    <p className={props.classes.toolDescription}>{props.children}</p>
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
