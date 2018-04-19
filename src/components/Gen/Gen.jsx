import React from 'react'
import injectSheet from 'react-jss'

import * as service from './service'
import styles from './styles'
import Notice from '../Notice/Notice'
import GenForm from './GenForm/GenForm'

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
        <p className={this.classes.code}>{JSON.stringify(this.state.data)}</p>
        <GenForm />
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
