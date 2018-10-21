import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import Button from './Button'

const ButtonLink = props => {
  const onClick = e => {
    e.preventDefault()
    props.history.push(props.route)
  }

  return (
    <Button
      ver={props.buttonType}
      addClass={'buttonLink'}
      onClick={onClick}
      role='link'
    >
      {props.children}
    </Button>
  )
}

ButtonLink.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.string,
  history: PropTypes.object,
  route: PropTypes.string
}

export default withRouter(ButtonLink)
