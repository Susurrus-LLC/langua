import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Tool from '../../components/Tool'

import FrequenForm from './FrequenForm'
import FrequenResults from './FrequenResults'
import frequenService from './FrequenService'
import styles from './styles'

export const frequenInfo = {
  title: 'Frequen',
  link: 'frequen',
  description: 'is a tool for analyzing phoneme frequencies in a given text.'
}

class Frequen extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onAnalyze = this.onAnalyze.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = frequenService.getData()
  }

  onChangeInput (e) {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        frequenService.save(this.state)
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore a saved state
      const file = e.target.files[0]
      const updateState = response => {
        if (response) {
          // Only change state if the file was successfully opened
          this.setState(prevState => response)
        }
      }
      frequenService.open(file, updateState)
    } else {
      const val =
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
      const name = e.target.name
      this.setState(prevState => ({
        [name]: val
      }))
    }
  }

  onAnalyze (e) {
    e.preventDefault()
    this.setState(
      prevState => ({
        analyzed: false
      }),
      () => {
        // Save the current state to storage
        frequenService.setStorage(this.state)

        const response = frequenService.analyze(this.state)

        this.setState(prevState => ({
          results: response,
          analyzed: true
        }))
      }
    )
  }

  onMouseOver (datapoint) {
    this.setState(prevState => ({
      hovered: datapoint
    }))
  }

  onMouseOut () {
    this.setState(prevState => ({
      hovered: undefined
    }))
  }

  render () {
    return (
      <Tool toolInfo={frequenInfo}>
        <FrequenForm
          styles={this.props.classes}
          state={this.state}
          onChangeInput={this.onChangeInput}
          onAnalyze={this.onAnalyze}
        />
        <FrequenResults
          styles={this.props.classes}
          results={this.state.results}
          hovered={this.state.hovered}
          filterSeg={this.state.filterSeg}
          analyzed={this.state.analyzed}
          onChangeInput={this.onChangeInput}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        />
      </Tool>
    )
  }
}

Frequen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Frequen)
