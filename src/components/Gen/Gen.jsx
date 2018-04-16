import React from 'react'
import injectSheet from 'react-jss'

import * as service from './service'
import styles from './styles'
import Notice from '../Notice/Notice'

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.classes = props.classes
    this.state = {
      data: service.getData()
    }
  }

  render () {
    return (
      <div className={this.classes.gen}>
        <h2 className='tool-title'>LanguaGen</h2>
        <Notice>This tool is still in development. Please be patient until it is complete.</Notice>
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
