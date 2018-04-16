import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  notice: {
    fontStyle: 'italic'
  }
}

const Notice = ({ classes, onClick, type, children }) => (
  <p className={classes.notice}>
    {children}
  </p>
)

export default injectSheet(styles)(Notice)
