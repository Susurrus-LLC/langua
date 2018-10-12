import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  notice: {
    fontStyle: 'italic'
  }
}

const Notice = (props) => (
  <p className={props.classes.notice}>
    {props.children}
  </p>
)

export default injectSheet(styles)(Notice)
