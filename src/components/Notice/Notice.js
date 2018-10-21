import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  notice: {
    fontStyle: 'italic'
  }
}

const Notice = props => <p className={props.classes.notice}>{props.children}</p>

Notice.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string
}

export default injectSheet(styles)(Notice)
