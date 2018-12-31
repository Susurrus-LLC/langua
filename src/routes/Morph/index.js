import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import MorphForm from './MorphForm'
import MorphResults from './MorphResults'
import morphService from './MorphService'
import styles from './styles'

export const morphInfo = {
  title: 'Morph',
  link: 'morph',
  description:
    'is a tool for modeling historical sound change according to arbitrary rules of phonetic change.'
}

class Morph extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onMorph = this.onMorph.bind(this)
    this.onCheck = this.onCheck.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onOpen = this.onOpen.bind(this)
    this.state = morphService.getData()
  }

  onChange (e) {
    // When an input field is changed, update state
    const name = e.target.name
    let value
    if (e.target.type === 'textarea') {
      // Split the textarea inputs by newlines
      value = e.target.value.split('\n')
    } else {
      // Just get the value of the input
      value = e.target.value
    }
    this.setState(prevState => ({
      [name]: value
    }))
  }

  onMorph (e) {
    e.preventDefault()
    // Generate the output
    this.setState(prevState => ({
      results: morphService.morph(this.state)
    }))
    // Save the current state to storage
    morphService.setStorage(this.state)
  }

  onCheck (e) {
    // When a checkbox option is changed, update state
    const value = e.target.value
    const checked = e.target.checked
    this.setState(prevState => ({
      [value]: checked
    }))
  }

  onSave (e) {
    e.preventDefault()
    // Save the current state to storage and generate a file
    morphService.save(this.state)
  }

  onOpen (e) {
    e.preventDefault()
    const file = e.target.files[0]
    const updateState = response => {
      if (response) {
        // Only change state if the file was successfully opened
        this.setState(prevState => response)
      }
    }
    morphService.open(file, updateState)
  }

  render () {
    return (
      <Tool toolInfo={morphInfo}>
        <Notice>This tool is still in development.</Notice>
        <MorphForm
          styles={this.props.classes}
          data={this.state}
          change={this.onChange}
          morph={this.onMorph}
          check={this.onCheck}
          save={this.onSave}
          open={this.onOpen}
        />
        <MorphResults
          styles={this.props.classes}
          outputFormat={this.state.outputFormat}
          results={this.state.results}
          showDiff={this.state.showDiff}
          showChanges={this.state.showChanges}
        />
      </Tool>
    )
  }
}

Morph.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Morph)
