import React from 'react'
import injectSheet from 'react-jss'

import * as service from './service'
import styles from './styles'
import Notice from '../Notice/Notice'
import GenForm from './GenForm/GenForm'
import GenResults from './GenResults/GenResults'

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.classes = props.classes
    this.onGenerate = this.onGenerate.bind(this)
    this.state = {
      data: service.getData(),
      results: ''
    }
  }

  onGenerate (e) {
    e.preventDefault()
    service.setStorage(this.state.data)
    this.setState(prevState => ({
      results: JSON.stringify(service.generate(this.state.data))
    }))
  }

  render () {
    const classes = this.classes
    const state = this.state

    return (
      <div className={classes.gen}>
        <h2 className='tool-title'>LanguaGen</h2>
        <Notice>This tool is still in development. Please be patient until it is complete.</Notice>
        <p className={classes.code}>{JSON.stringify(state.data)}</p>
        <GenForm data={state.data} generate={this.onGenerate} />
        <GenResults results={state.results} />
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
