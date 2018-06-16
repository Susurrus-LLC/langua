// @flow
import React from 'react'
import { withRouter } from 'react-router'
import type { RouterHistory, Route } from 'react-router-dom'

import Button from './Button'

type props = {
  history: RouterHistory,
  route: Route,
  buttonType?: string,
  children: string
}

const ButtonLink = (props: props) => {
  const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
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
