import React from 'react'
import { withRouter } from 'react-router'

import Button from './Button'

const ButtonLink = (props) => {
  const onClick = e => {
    e.preventDefault()
    props.history.push(props.route)
  }

  return (
    <Button ver={props.buttonType} addClass={'buttonLink'} onClick={onClick} role='link'>
      {props.children}
    </Button>
  )
}

export default withRouter(ButtonLink)
