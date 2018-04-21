import React from 'react'
import injectSheet from 'react-jss'

import service from './service'
import styles from './styles'
import HelpLink from '../HelpLink/HelpLink'
import Notice from '../Notice/Notice'
import GenForm from './GenForm/GenForm'
import GenResults from './GenResults/GenResults'

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.classes = props.classes
    this.onWordNumChange = this.onWordNumChange.bind(this)
    this.onChangeNewline = this.onChangeNewline.bind(this)
    this.onChangeDupes = this.onChangeDupes.bind(this)
    this.onGenerate = this.onGenerate.bind(this)
    this.onSave = this.onSave.bind(this)
    this.state = {
      data: service.getData(),
      results: '',
      stats: {
        words: 0,
        maxWords: 0
      }
    }
  }

  onWordNumChange (e) {
    let val = e.target.value
    if (val < 1) {
      val = 1
    } else if (val > 9999) {
      val = 9999
    }

    if (val > 0 && val < 10000) {
      let newData = this.state.data
      newData.words = val
      this.setState(prevState => ({
        data: newData
      }))
    }
  }

  onChangeNewline (e) {
    let newData = this.state.data
    newData.newline = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  onChangeDupes (e) {
    let newData = this.state.data
    newData.filterdupes = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  onGenerate (e) {
    e.preventDefault()
    service.setStorage(this.state.data)
    let response = service.generate(this.state.data)
    this.setState(prevState => ({
      results: response.results,
      stats: response.stats
    }))
  }

  onSave (e) {
    e.preventDefault()
    service.setStorage(this.state.data)
    // Add a function to save this.state.data to a file
  }

  render () {
    const classes = this.classes
    const state = this.state

    return (
      <div className={classes.gen}>
        <HelpLink link='/gen/help'>
          Help
        </HelpLink>
        <h2 className='tool-title'>LanguaGen</h2>
        <Notice>This tool is still in development. Please be patient until it is complete.</Notice>
        <p className={classes.code}>
          {JSON.stringify(state.data)}
        </p>
        <GenForm
          data={state.data}
          changeWordNum={this.onWordNumChange}
          changeNewline={this.onChangeNewline}
          changeDupes={this.onChangeDupes}
          generate={this.onGenerate}
          save={this.onSave}
        />
        <GenResults
          newLine={state.data.newline}
          results={state.results}
          stats={state.stats}
        />
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
