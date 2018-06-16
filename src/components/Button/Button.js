// @flow
import React from 'react'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

type props = {
  classes: Classes,
  addClass?: string,
  onClick(): void,
  type?: string,
  ver?: string,
  id?: string,
  role?: string,
  children: string
}

const Button = (props: props) => {
  const filterClass = (ver: typeof props.ver, classes: typeof props.classes): string | null => {
    if (ver === 'neutral') {
      return classes.neutral
    } else if (ver === 'success') {
      return classes.success
    } else if (ver === 'danger') {
      return classes.danger
    } else {
      return null
    }
  }

  if (props.type === 'file' && props.type === 'this is not ready yet') {
    // This still needs to be ironed out
    return (
      <input
        onClick={props.onClick}
        id={props.id}
        className={classNames(props.classes.btn, filterClass(props.ver, props.classes), props.classes[props.addClass])}
        type={props.type}
      />
    )
  } else {
    return (
      <button
        onClick={props.onClick}
        id={props.id}
        className={classNames(props.classes.btn, filterClass(props.ver, props.classes), props.classes[props.addClass])}
        type={props.type}
        role={props.role || 'button'}
      >
        {props.children}
      </button>
    )
  }
}

export default injectSheet(styles)(Button)
